<template>
	<div id = "app">
		<h3>App.vue</h3>
		<hr>
		<div class="box">
			<!--  存放两个子组件 组件的关系是在使用时才被创造的  -->
			<Left></Left>
			<Right></Right>
		</div>
		<Father></Father>
	</div>
</template>

<script>
	//导入组件
	import left from './components/left.vue';
	import right from './components/right.vue';
	import Father from '@/components/father.vue'
	
	export default {
		data(){
			return {
				username:"APP",
			}
		},
		//组件注册
		components:{
			Left:left,
			Right:right,
			Father,
		}
	}
</script>

<!-- 加上lang = "less" 表示使用less与预编译器 -->
<style lang = "less" scoped >
	#app{
		width:98%;
		margin:0px auto;
	}
	h3{
		background:skyblue;
		height: 200px;
	}
	.box{
		width: 100%;
		overflow: hidden;
		margin:20px 0px;
	}
</style>
<!--  组件的创建包含三个标签一个注意点  -->
<!--  组件是由template style script 三个标签组合而成  -->
<!--  template 代表的是页面的UI结构 style是页面的样式控制 带有lang属性是否使用less编译 是则lang = "less" 否则不用改  script 是页面的js交互控制 结构为默认到处一个对象 
export default{里面同样有data属性 不过必须是个方法方法返回一个对象 ，其他的一致} -->
