<template>
	<div>
		<h4>{{ title }}</h4>
		<p>{{ count }}</p>
		<button @click = "add">+1</button>
	</div>
</template>

<script>
	export default {
		//为了能让使用者向构建者传参数分为两部分 props
		//1、构建者创建自定义属性 
		//2、在使用者中使用 通过属性名传参数
		//注：自定义属性 虽然跟data中的数据使用类似 不过自定义属性是自读的
		//这个是自定义属性的简单定义形式 --> 数组类型 
		// props:['init'],
		//而使用复杂的方法为定义对象的方式， 优点 可以定义默认值 跟类型 required是否必须传值 跟是否有默认值无关
		props:{
			init:{
				default:0,
				type:Number,
			},
			title:{
				default:"hellow",
				type:String,
				required:true,
			}
		},
		data(){
			// 由于init 是只读的 要改变值 就必须把他放回到data中
			return {
				count:this.init,
			}
		},
		methods:{
			add(){
				this.count += 1;
			}
		}
	}
</script>

<style lang="less" scoped >
	h4{
		color:black;
	}
</style>