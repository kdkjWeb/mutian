<template>
	<div id="index">
		<!--顶部搜索-->
		<div class="navContent">
			<div class="search">
				<!--<i class="el-icon-search"></i>-->
				<div class="search_left">
					<i class="mint-toast-icon mintui mintui-back"></i>
				</div>
				<input type="text" placeholder="输入要搜索的商品">
				<!--<span class="search-icon">搜索</span>-->
				<span class="search_right">搜索</span>
			</div>
		</div>

		<div id="banner">
			<img :src="imgUrl" alt="" />
		</div>

		<div class="head_tit">
			<div>
				<span class="titList" v-for="item in titList" :key="item.id">{{item.text}}</span>
			</div>
		</div>

		<div class="gift">
			<img src="../../assets/png/jz.png" />
		</div>

		<div class="cont_tit">
			<div>
				<img src="../../assets/png/qd.png" alt="" />
				<span>品牌故事</span>
			</div>
			<div>
				<img src="../../assets/png/qd.png" alt="" />
				<span>产品优势</span>
			</div>
			<div>
				<img src="../../assets/png/qd.png" alt="" />
				<span>秒杀</span>
			</div>
			<div>
				<img src="../../assets/png/qd.png" alt="" />
				<span>新人福利</span>
			</div>
			<div>
				<img src="../../assets/png/qd.png" alt="" />
				<span>购买须知</span>
			</div>
		</div>

		<div class="tit_box">今日推荐</div>

		<div>
			<div class="tit_box">限时秒杀</div>
		</div>

		<!--秒杀商品-->
		<!--<div class="kill-time">
			<div class="hour">{{killHour}}</div>&nbsp;:&nbsp;
			<div class="minute">{{killMinute}}</div>&nbsp;:&nbsp;
			<div class="second">{{killSecond}}</div>
		</div>
		<div class="kill-pro">
			<div class="left">
				<img src="../../assets/png/1.png" alt="">
			</div>
			<div class="right">
				<div class="name">冷吃兔</div>
				<div class="price">
					<div class="after-sale">￥20.00</div>
					<div class="before-sale">￥25.00</div>
					<div class="grab">马上抢</div>
				</div>
				<div class="progress-area">
					<div class="buy-percent">已抢购55%</div>
					<div class="progress">
						<div class="progress-bar progress-bar-danger" style="width: 50%;">
						</div>
					</div>
					<div class="buy-num">已抢购25件</div>
				</div>
			</div>
		</div>-->

	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				imgUrl: "/static/img/bb.981a362.png",
				titList: [{
					text: "推荐"
				}, {
					text: "冷吃系列"
				}, {
					text: "休闲小吃系列"
				}, {
					text: "精品水果系列"
				}, {
					text: "礼盒礼包系列"
				}, {
					text: "礼盒礼包系列"
				}, {
					text: "礼盒礼包系列"
				}],
				killHour: 10,
				killMinute: 0,
				killSecond: 0
			}
		}

	}
</script>

<style>
	.navContent {
		height: .8rem;
		line-height: .25rem;
		padding: 5px 0;
		background-color: #f6f6f6;
	}
	
	.search {
		position: relative;
		text-align: center;
	}
	
	.search input {
		margin: 0 auto;
		background-color: #D3D3D3;
		border-radius: 5px;
		border: none;
		text-decoration: none;
		width: 5.35rem;
		height: .6rem;
		outline: none;
		padding-left: 5px;
	}
	
	.search_left {
		position: absolute;
		left: 5px;
	}
	
	.search_left i {
		margin-top: 6px;
		margin-left: 5px;
	}
	
	.search_right {
		position: absolute;
		right: 5px;
		padding-right: 5px;
		font-size: .3rem;
	}
	
	#banner img {
		width: 100%;
	}
	
	.head_tit div {
		width: 100%;
		overflow-x: scroll;
		height: 20px;
	}
	
	.gift img {
		width: 100%;
	}
	.cont_tit {
		overflow: hidden;
		border-bottom: 3px solid #D3D3D3;
	}
	
	.cont_tit div {
		float: left;
		width: 20%;
		text-align: center;
	}
	
	.tit_box {
		margin: 0 auto;
		color: #ffffff;
		background-color: #FD9A01;
		width: 100px;
		text-align: center;
		padding: 5px 0;
	}
	/*============*/
	
	.pro-title {
		width: 100%;
		height: 50px;
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
		width: 120px;
		margin: 3px 5px 0 5px;
	}
	
	.progress .progress-bar {
		border-radius: 20px;
		position: relative;
		animation: animate-positive 2s;
	}
	
	.kill-pro {
		display: flex;
		height: 120px;
		flex-direction: row;
		padding: 20px;
	}
	
	.kill-pro .left img {
		height: 100px;
	}
	
	.kill-pro .right {
		display: flex;
		height: 120px;
		flex-direction: column;
		margin-left: 20px;
	}
	
	.kill-pro .right .name {
		font-size: 1.2rem;
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
	}
	
	.before-sale {
		color: grey;
		text-decoration: line-through;
		font-size: 8px;
		margin-top: 4px;
	}
	
	.grab {
		background: seagreen;
		border-radius: 6px;
		padding: 4px;
		color: white;
		font-size: 1rem;
	}
	
	.kill-pro .right .progress-area {
		margin-top: 5px;
		display: flex;
		flex-direction: row;
	}
	
	.buy-percent {
		font-size: .8rem;
		color: gray;
	}
	
	.buy-num {
		font-size: 8px;
		color: gray;
	}
	
	.kill-time {
		display: flex;
		height: 22px;
		flex-direction: row;
		margin-left: 20px;
		justify-content: flex-start;
		color: red;
		margin-top: 10px;
		margin-bottom: -10px;
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
	
	
</style>