<template>
	<div class="new">	<!--新人福利-->
		<mt-header title="新人福利">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<!--<mt-button icon="more" slot="right"></mt-button>-->
		</mt-header>
		
		<img src="../../../static/images/11.png" alt=""  class="headImg"/>
		
		<div class="sayNow">
			<span></span>
			进店必选
		</div>
	
		<!--商品-->
		<div class="hotPro">
			<div class="hotPro-btm">
				<div class="hotProduct" v-for="item in  proList" :key="item.id">
					<img :src="item.imgsrc" alt="图片显示区域：宽（100%），高（125）">
					<p class="ad-title">{{item. adname }}</p>
					<p class="name-title">{{item. proname }}</p>
					<div class="textBox-price">
						<div class="after-sale">￥{{ item.price }}</div>
						<div class="before-sale">￥{{item. oldprice }}</div>
						<div class="addShopBox" @click.stop="addCollect(item.id)">
							<i class="iconfont icon-gouwuchekong"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
	
	</div>
</template>

<script>
	export {default} from './newwelfareCtr'
</script>

<style>
	body,html{
		background-color: #FFFFFF;
	}
	/*mint ui样式覆盖*/
	.mint-header {
		background-color: #FFFFFF;
		color: #000000;
	}
	.mint-header-title {
		font-size: .34rem;
	}
	
	.headImg{
		width: 100%;
	}
	/*进店必选*/
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
	/*===商品*/
	.hot-icon {
		float: left;
		background: green;
		width: 20px;
		height: 15px;
		margin: 5px;
		margin-top: 8px;
	}
	
	.hot-title {
		margin: 5px;
		margin-left: 2px;
		float: left;
		font-size: .3rem;
	}
	
	.hotPro-btm {
		width: 96%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.hotProduct {
		width: 3.4rem;
		height: 4.5rem;
		position: relative;
		font-size: 12px;
		margin: 5px 0;
		overflow: hidden;
		display: inline-block;
		border: 1px solid transparent;
		background-color: #FFFFFF;
	}
	
	.hotProduct img {
		width: 100%;
		height: 2.8rem;
	}
	
	.hotProduct .textBox {
		height: 25%;
		width: 94%;
		text-align: left;
		padding: 0 3%;
	}
	
	.textBox-title {
		margin-top: 5px;
		padding: 0;
		margin-bottom: 0;
		text-align: left;
	}
	
	.ad-title {
		margin-top: 5px;
		font-size: .3rem;
		padding: 0;
		margin-bottom: 0;
		text-align: left;
		color: black;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.name-title {
		margin-top: 5px;
		padding: 0;
		margin-bottom: 0;
		text-align: left;
		color: gray;
		font-size: 11px;
		overflow: hidden;
        text-overflow:ellipsis;
    	white-space: nowrap;
	}
	
	.textBox-price {
		margin-top: .1rem;
		display: flex;
		justify-content: space-between;
	}
	
	.textBox-price .before-sale {
		margin-left: -10px;
		font-size: .2rem;
		text-decoration:line-through;	
	}
	
	.textBox-price .after-sale {
		font-size: .3rem;
	}
	
	.textBox-price span:nth-of-type(1) {
		color: red;
	}
	
	.textBox-price span:nth-of-type(2) {
		color: grey;
	}
	.after-sale{
		color: red;
	}
	.addShopBox {
	    width: .5rem;
	    text-align: center;
	    background: red;
	    border-radius: 6px;
	    padding: 0 .1rem;
	    color: white;
	    font-size: .1rem;
	    height: .3rem;
	    line-height: .3rem;
	    margin-top: .05rem;
	}
</style>