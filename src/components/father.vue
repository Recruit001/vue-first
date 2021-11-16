<template>
	<div>
		<h3 :style = "{fontSize:fontS + 'px'}">父级别</h3>
		<div class="box">
			<Son1 :booksP = "books"></Son1>
			<!-- 要接受子元素传来的参数 创建自定义事件 @+名称 = "处理函数" -->
			<Son2 @changeFont = "changeF"></Son2>
		</div>
	</div>
</template>

<script>
	//导入子组件
	import Son1 from '@/components/son1.vue';
	import Son2 from '@/components/son2.vue';
	
	export default {
		data(){
			return {
				books:[
					{id:1,title:"中国人的骄傲",content:"中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！"},
					{id:2,title:"中国人的骄傲2",content:"中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！"},
					{id:3,title:"中国人的骄傲3",content:"中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！中国人的骄傲啊！"}
				],
				fontS:"",
			}
		},
		components:{
			Son1,
			Son2,
		},
		methods:{
			changeF(val){
				this.fontS = val;
				console.log(this.fontS);
			}
		}
	}
</script>

<style lang = "less" scoped >
	div{
		background-color: grey;
	}
	div.box{
		background-color: #FFC0CB;
		display: flex;
		justify-content: center;
		align-items: stretch;
		padding:20px 0px;
	}
</style>
