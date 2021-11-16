<template>
	<div>
		<div class="book" v-for = "item in books" :key = "item.id">
			<h3>books.title</h3>
			<p class="content">books.content</p>
			<button @click = "cxd">发送数据</button>
		</div>
	</div>
</template>

<script>
	import bus from "@/components/bus.js";
	export default {
		
		data(){
			return {
				books:this.booksP,
				brotherD:"来自son1发来的数据!"
			}
		},
		props:{
			booksP:{
				default:[],
				type:Array,
				required:true,
			}
		},
		methods:{
			cxd(){
				//触发bus.$emit 的自定义事件
				console.log(1);
				bus.$emit("sendS",this.brotherD);
			}
		}
	}
</script>

<style lang = "less" scoped >
	div{
		width: 100%;
		background-color: aliceblue;
	}
	h3{
		font-size: 20px;
		line-height: 30px;
		color:black;
	}
	.content{
		font-size: 15px;
		line-height: 28px;
	}
</style>