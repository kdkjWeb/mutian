<template>
	<div class="myorder"> <!--我的订单-->
		<mt-header title="我的订单">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		
		<!--====头部标题-->
		<div class="head">
			<div :class="index==headIndex?'active':''" v-for="(head,index) in headTit" :key="index" @click="changeHead(index)">{{head}}</div>
		</div>
		
		<div>
			
			<div class="notOrder">
				<img src="../../../static/images/dongzuo.png"/>
				<span>这里空空如也!快去下单吧~</span>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export {default} from './myorderCtr'
</script>

<style>
	/*mint ui样式覆盖*/
	.mint-header {
		background-color: #FFFFFF;
		color: #000000;
	}
	.mint-header-title {
		font-size: .34rem;
	}
	.head{
		height: .8rem;
		margin-top: .1rem;
		background-color: #FFFFFF;
	}
	.head div{
		float: left;
		width: 20%;
		font-size: .16rem;
		text-align: center;
		height: .7rem;
		line-height: .7rem;
	}
	
	.active{
		color: #1bd871;
		border-bottom: 2px solid #1bd871;
	}
	
	/*==没有订单===*/
	.notOrder img{
		width: 3.8rem;
		margin-top: 2.5rem;
	}
	.notOrder {
		text-align: center;
	}
	.notOrder span{
		display: block;
		margin-top: .18rem;
		color: #787878;
		font-size: .16rem;
	}
</style>