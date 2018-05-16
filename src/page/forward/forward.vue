<template>
	<div class="forward">
		<mt-header title="转发销售">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		
		<!--商品信息-->
		<div class="goods">
			<img src="../../../static/images/c.png" alt="" />
			<div>
				<span>【爆款推荐】</span>
				<span>自贡冷吃兔</span>
				<span>香辣味</span>
				<span>200g</span>
				<span>爆款美味，现在下单有机会成为会员，全场满98即可包邮</span>
			</div>
		</div>
		
		<!--转发理由-->
		<div class="inputDiv">
			<!--<input type="text" placeholder="写下您的商品推荐理由，能帮助您带来更高的转化哦"/>-->
			<textarea name="" rows="" cols="" placeholder="写下您的商品推荐理由，能帮助您带来更高的转化哦"></textarea>
		</div>
		
		<!--会员价格-->
		<div class="vip">
			<div>
				<span>会员价</span>
				<span>￥2000</span>
			</div>
			<div>
				<span>零售价</span>
				<span>￥2000</span>
			</div>
		</div>
		
		<!--立即转发-->
		<div class="forwardDiv">
			<input type="button" name="" id="" value="立即转发" />
		</div>
		
		
	</div>
</template>

<script>
	export {default} from './forwardCtr'
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
	/*商品信息*/
	.goods{
		background-color: #FFFFFF;
		margin-top: .25rem;
		font-size: .16rem;
		padding: .3rem;
		height: 1.6rem;
			}
	.goods img{
		display: inline-block;
		width: 2rem;
		height: 1.4rem;
		vertical-align: middle;
	}
	.goods div{
		margin-left: 0.12rem;
		display: inline-block;
		width: 4.3rem;
		vertical-align: middle;
	}
	.inputDiv{
		background-color: #FFFFFF;
		margin-top: .1rem;
		height: 2.1rem;
	}
	.inputDiv textarea{
		margin-top: .3rem;
		/*width: 100%;*/
		padding: .2rem;
		width: 7.1rem;
		height: 1.5rem;
		outline: none;
		border: none;
		resize:none;
		color: #b3b3b3;
	}
	
	/*===会员价格========*/
	.vip{
		background-color: #FFFFFF;
		margin-top: .2rem;
		font-size: .15rem
	}
	.vip div{
		height: .8rem;
		line-height: .8rem;
		padding: 0 .2rem;
	}
	.vip div span:last-of-type{
		float: right;
	}
	/*立即转发*/
	.forwardDiv{
		position: fixed;
		bottom: 0;
		height: 4.5rem;
		width: 100%;
		background-color: #FFFFFF;
		text-align: center;
	}
	.forwardDiv input{
		margin-top: 3rem;
		width: 6.5rem;
		height: .9rem;
		background-color: #d46d11;
		color: #FFFFFF;
		font-size: .3rem;
		border: none;
		outline: none;
		border-radius: 4px;
	}
</style>