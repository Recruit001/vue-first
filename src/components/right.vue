<template>
	<div>
		<p>right</p>
		<Count :init = "6" :title = "title"></Count>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title:"我很好的啊"
			}
		}
	}
</script>

<style lang = "less" scoped >
	div{
		width: 50%;
		height: 300px;
		float: left;
		background-color: blanchedalmond;
	}
</style>
