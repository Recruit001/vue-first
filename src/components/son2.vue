<template>
	<div>
		<button @click = "add">改变标题的字体大小</button>
		<h3>{{ b }}</h3>
	</div>
</template>

<script>
	//导入bue实例
	import bus from "@/components/bus.js";
	
	export default {
		data(){
			return {
				fontsize:14,
				b:"",
			}
		},
		methods:{
			add(){
				this.fontsize += 1;
				//因为要传给父级 所以要触发父的自定义事件
				//第一个参数为自定义事件的名称 第二个参数为 自定义函数传入的实参
				this.$emit("changeFont",this.fontsize);
			}
		},
		//创造自定义函数 要自动执行 想到生命函数
		//使用created 最先能访问到Vue实例 可以改变b
		created(){
			//通过$on定义自定义事件
			bus.$on("sendS",(val) => {
				this.b = val;
			})
		}
	}
</script>

<style lang = "less" scoped >
	div{
		width: 100%;
	}
	h3{
		color:hotpink;
	}
</style>
