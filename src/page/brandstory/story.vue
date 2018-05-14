<template>
	<div class="story">  <!--品牌故事-->
		<img src="../../../static/images/story.png" alt="" />
		<div class="goDo">
			<span>去选购吧 <i class="iconfont icon-yuanquanjiantouyou"></i></span>
		</div>
		
	</div>
</template>

<script>
	export {default} from './storyCtr'
</script>

<style>
	img{
		display: block;
		width: 100%;
	}
	.goDo{
		background-color: #FFFFFF;
		text-align: center;
		font-size: .4rem;
		padding:2rem 0;
		line-height: .3rem;
		font-weight: 400;
	}
	.goDo i{
		font-size: .5rem;
		margin-left: .2rem;
	}
</style>