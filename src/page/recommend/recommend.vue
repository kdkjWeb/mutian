<template>
	<div class="recommend">
		<div class="gift">
			<img src="../../assets/png/jz.png" />
		</div>

		<div class="cont_tit">
			<div @click="linkTo(0)">
				<img src="../../../static/images/pp.png" alt="" />
				<span>品牌故事</span>
			</div>
			<div @click="linkTo(1)">
				<img src="../../../static/images/ys.png" alt="" />
				<span>产品优势</span>
			</div>
			<div @click="linkTo(2)">
				<img src="../../../static/images/ms.png" alt="" />
				<span>秒杀</span>
			</div>
			<div @click="linkTo(3)">
				<img src="../../../static/images/fl.png" alt="" />
				<span>新人福利</span>
			</div>
			<div @click="linkTo(4)">
				<img src="../../../static/images/gm.png" alt="" />
				<span>购买须知</span>
			</div>
		</div>

		<div class="tit_box"><span>今日推荐</span></div>

		<div>
			<mt-swipe :show-indicators="false" :auto="0" >
				<mt-swipe-item v-for="item in HotList" :key="item.id" >
					<div class="hotGoods" @click="toDetails(item.id)">
						<img :src="myurl + item.picture"/>
						<span>
							{{item.name}}
							￥{{item.price}}
						</span>
					</div>
				</mt-swipe-item>
			</mt-swipe>
		</div>

		<div class="tit_boxFather">
			<div class="tit_box"><span>限时秒杀</span></div>
		</div>

		<!--秒杀时间-->
		<div class="kill-time">
			<div class="hour">{{killHour}}</div>&nbsp;:&nbsp;
			<div class="minute">{{killMinute}}</div>&nbsp;:&nbsp;
			<div class="second">{{killSecond}}</div>
		</div>
		<!--秒杀商品-->
		<div class="kill-pro">
			<div class="left">
				<img src="../../assets/png/1.png" alt="">
			</div>
			<div class="right">
				<div class="name">冷吃兔200g</div>
				<div class="price">
					<div class="after-sale">￥20.00</div>
					<div class="before-sale">￥25.00</div>
					<div class="grab">马上抢</div>
				</div>
				<div class="progress-area">
					<div class="buy-percent">已抢购55%</div>
					<div class="progress">
						<div class="progress-bar progress-bar-danger" style="width: 55%;">
						</div>
					</div>
					<div class="buy-num">已抢购25件</div>
				</div>
			</div>
		</div>
		<!--热门推荐-->
		<div class="hotPro">
			<div class="hot-icon"></div>
			<div class="hot-title">产品推荐</div>
			<div class="hotPro-btm">
				<div class="hotProduct" v-for="item in  proList" :key="item.id" @click="toDetails(item.id)">
					<img :src="myurl + item.picture"/>
					<p class="ad-title">{{item.name }}</p>
					<p class="name-title">{{item.description }}</p>
					<div class="textBox-price">
						<div class="after-sale">￥{{ item.disPrice }}</div>
						<div class="before-sale">￥{{item.price}}</div>
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
		export {default} from './recommendCtr'
</script>

<style scoped>
	.recommend{
		width: 100%;
		overflow: hidden;
	}
	/*================*/
	.gift img {
		width: 100%;
	}
	

	.cont_tit {
		overflow: hidden;
		border-bottom: .12rem solid #D3D3D3;
	}
	
	.cont_tit div {
		float: left;
		width: 20%;
		text-align: center;
		font-size: .3rem;
		font-weight: 800;
		padding: .3rem 0;
	}
	
	.cont_tit img {
		width: 80%;
	}
	
	.tit_boxFather {
		background-color: #D3D3D3;
		padding: .05rem 0;
		margin: .3rem 0;
	}
	
	.tit_box {
		margin: 0 auto;
		background-color: #FD9A01;
		width: 2rem;
		padding: 5px;
		margin: .3rem auto;
	}
	
	.tit_box span {
		display: block;
		height: .4rem;
		line-height: .4rem;
		border: 1px solid #FFFFFF;
		font-size: .12rem;
		text-align: center;
		color: #000000;
		font-weight: 700;
	}
	/*===轮播======*/
	
	.mint-swipe {
		height: 2rem;
	}
	
	.mint-swipe-item {
		height: 2rem;
		text-align: center;
	}
	
	.hotGoods{
		height: 100%;
		
		position: relative;
	}
	.hotGoods img{
		position: absolute;
		width: 60%;
		height: 100%;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	.hotGoods>span{
		position: absolute;
		bottom: 0;
		right: 2rem;
		z-index: 10;
		padding: .05rem .1rem;
		border-radius: .1rem;
		background-image: url(../../assets/png/span.png);
		background-size: 100% 100%;
		color: #FFFFFF;
		font-weight: 500;
		font-size: .18rem;
	}
	/*======秒杀======*/
	
	.pro-title {
		width: 100%;
		height: 50px;
	}
	
	.price .before-sale {
		margin-top: .2rem;
	}
	
	.pro-title img {
		width: 100px;
		height: 30px;
		margin-top: 10px;
	}
	
	.kill-title {
		width: 100%;
		height: 50px;
		background: #d3d3d3;
		margin-top: 10px;
	}
	
	.kill-title img {
		width: 100px;
		height: 30px;
		margin-top: 10px;
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
	
	.progress .progress-bar {
		border-radius: 20px;
		position: relative;
		animation: animate-positive 2s;
	}
	
	.kill-pro {
		padding: .1rem;
		border-bottom: 6px solid #D3D3D3;
		overflow: hidden;
	}
	
	.kill-pro>div {
		float: left;
	}
	
	.kill-pro .left {
		width: 1.8rem;
		height: 1.8rem;
	}
	
	.kill-pro .left img {
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
	
	.kill-time {
		display: flex;
		height: 22px;
		flex-direction: row;
		margin-left: .2rem;
		justify-content: flex-start;
		color: red;
		margin-top: 10px;
		font-size: .12rem;
	}
	
	.kill-time div {
		background: red;
		color: white;
		padding: 3px;
		padding-top: 2px;
		border-radius: 3px;
	}
	
	.hotPro>p {
		width: 18%;
		margin: 10px auto;
	}
	
	figure {
		margin: 0;
		padding: 0;
	}
	/*======热门推荐=======*/
	
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
		text-overflow: ellipsis;
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
		margin-top: .08rem;
	}
	
	/*==========*/
	
</style>