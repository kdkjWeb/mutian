<template>
	<div class="story">  <!--品牌故事-->
		 <div class="title">
            <i class="mint-toast-icon mintui mintui-back" @click="back"></i>
        	品牌故事
        </div> 
		
		<img src="../../../static/images/story.png" alt="" />
		<div class="goDo">
			<span @click="back">去选购吧 <i class="iconfont icon-yuanquanjiantouyou"></i></span>
		</div>
		
	</div>
</template>

<script>
	export {default} from './storyCtr'
</script>

<style scoped>
	.title{
	    position: relative;
	    height: .9rem;
	    line-height: .9rem;
	    text-align: center;
	    width: 100%;
	    font-size: .34rem;
	    background-color: #fff;
	}
	.title .mintui{
	    position: absolute;
	    left: .35rem;
	}
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