<template>
	<div>
		<p>left</p>
		<!-- 自定义属性直接使用传入的是字符串 可使用v-bind 改变双引号里的环境 从而让数据类型可发生改变 -->
		<Count :init = "9" :title = "title" ></Count>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:"你好嘛"
			}
		}
	}
</script>

<style lang = "less" scoped >
	/* 样式重叠问题是因为在组件定义的样式都会被使用在全局上，这个导致定义一个标签的样式会影响到全局
	 这个很不好，不能实现很好的封装,所以可以给每个组件的标签加上统一的自定义苏醒 data-xx-xx 然后定义组件样式时 在每个样式的标识上都加上属性选择器 这个属性每个
	 组件必须是唯一的 类似在这里定义div 可用 div[data-xx-xxx] 来定义样式(div 得先加上属性data-xx-xxx)
	 但全部操作太麻烦了 vue 有插件vue-template-compiler 让我们为style 加上scope时候自动编译都加上唯一的标识 实现组件间样式的分离
	 */
	div{
		width:50%;
		height: 300px;
		background-color: aquamarine;
		float: left;
	}
	/* 使用/deep/ 控制第三方组件内部的样式*/
	/deep/ h4{
		color:pink!important;
	}
</style>