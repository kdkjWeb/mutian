<template>   
	<div class="rushtobuy"><!--限时秒杀-->
			<!--头部-->
		<mt-header title="限时秒杀">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
		</mt-header>
		
		<!--抢购时间-->
		<div class="buyTime">
			<div>
				<span>08:00</span>
				<span>已结束</span>
			</div>
			<div class="byNow">
				<span>12:00</span>
				<span>抢购中</span>
			</div>
			<div>
				<span>20:00</span>
				<span>准备抢购</span>
			</div>
		</div>
		
		<!--抢购标题-->
		<div class="sayNow">
			<span></span>
			限时限量  疯狂抢购
		</div>
		
		<div>
			<div class="kill-pro" v-for="(good,index) in gooDs" :key="good.id">
				<div class="left">
					<img src="../../assets/png/1.png" alt="">
				</div>
				<div class="right">
					<div class="name">{{good.name}} {{good.weight}}g</div>
					<div class="price">
						<div class="after-sale">￥{{good.price}}</div>
						<div class="before-sale">￥{{good.Oprice}}</div>
						<div class="grab">马上抢</div>
					</div>
					<div class="progress-area">
						<div class="buy-percent">已抢购{{good.percent}}%</div>
						<div class="progress">
							<div class="progress-bar progress-bar-danger" :style="'width:'+ good.percent +'%;'"></div>
						</div>
						<div class="buy-num">已抢购{{good.buyNum}}件</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<!--===购物车按钮=====-->
		<div class="addCar">
			<i class="iconfont icon-addCart"></i>
		</div>
		
	</div>
</template>

<script>
	export {default} from './rushtobuyCtr'
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
	
	/*抢购时间*/
	.buyTime{
		color: #FFFFFF;
		background-color: #ffd086;
		font-size: .17rem;
		text-align: center;
		width: 100%;
		height: .8rem;
	}
	.buyTime div{
		display: inline-block;
		margin: 0 auto;
		width: 1.22rem;
	}
	.buyTime div span{
		display: block;
	}
	.byNow{
		background-color: #fd9a01;
		height: .82rem;
		position: relative;
	}
	.byNow:after{
		border-left: 5px solid transparent;  
	    border-right: 5px solid transparent;  
	    border-top: 5px solid #fd9a01;
	    content: "";  
	    position: absolute;
	    top: .82rem;
	    width: 0; 
	    left: .5rem;
	}
	
	/*===抢购标题*/
	.sayNow{
		font-size: .16rem;
		width: 100%;
		height: .84rem;
		line-height: .84rem;
	}
	.sayNow span{
		display: inline-block;
		background-color: #00a709;
		width: .4rem;
		height: .25rem;
		margin-right: .15rem;
	}
	/*抢购商品*/
	.kill-pro {
		background-color: #FFFFFF;
		padding: .1rem;
		overflow: hidden;
		margin-bottom: .2rem;
	}
	.kill-pro>div{
		float: left;
	}
	.kill-pro .left{
		width: 1.8rem;
		height: 1.8rem;
	}	
	.kill-pro .left img{
		width: 100%;
		height: 100%;
		border-radius: .1rem;
	}
	.kill-pro .right {
		width: 5.2rem;
		height: 2rem;
		flex-direction: column;
		margin-left: .2rem;
	}
	
	.kill-pro .right .name {
		font-size: .3rem;
		font-weight: 500;
		text-align: left;
	}
	
	.kill-pro .right .price {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 5px;
	}
	
	.after-sale {
		color: red;
		font-size: .5rem;
	}
	
	.before-sale {
		color: grey;
		text-decoration: line-through;
		font-size: 8px;
	}
	
	.grab {
		float: right;
		background: seagreen;
		border-radius: 6px;
		padding: 0 .1rem;
		height: .5rem;
		color: white;
		font-size: .1rem;
		line-height: .5rem;
		margin-top: .1rem;
	}
	
	.kill-pro .right .progress-area {
		margin-top: 5px;
		display: flex;
		flex-direction: row;
	}
	
	.buy-percent {
		font-size: .1rem;
		color: gray;
	}
	
	.buy-num {
		font-size: .1rem;
		color: gray;
	}
	.progress {
	    height: 7px;
	    background: white;
	    overflow: visible;
	    border-radius: 20px;
	    border: 1px solid red;
	    width: 2rem;
	    margin: 3px 5px 0 5px;
	}
	.progress-bar-danger{
		height: 100%;
		background-color: red;
	}
	/*==购物车按钮=========*/
	.addCar{
		position: fixed;
		left: .3rem;
		bottom: .2rem;
		width: .8rem;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		background-color: #FFFFFF;
		color: #c21920;
		display: inline-block;
		border-radius: 100%;
		border: 1px solid #aeaeae;
	}
	.addCar i{
		display:block;
		font-size: .5rem;
		font-weight: 700;
	}
</style>