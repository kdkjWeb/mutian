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
				<span class="titList" v-for="item in titList"  :key="item.id">{{item.text}}</span>
			</div>
		</div>
		
		<div class="gift">
			<img src="../../assets/png/jz.png"/>
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
		
	</div>
</template>

<script>
	
export default {
	name:"index",
	data(){
		return {
			imgUrl:"/static/img/bb.981a362.png",
			titList:[{
				text:"推荐"
			},{
				text:"冷吃系列"
			},{
				text:"休闲小吃系列"
			},{
				text:"精品水果系列"
			},{
				text:"礼盒礼包系列"
			},{
				text:"礼盒礼包系列"
			},{
				text:"礼盒礼包系列"
			}
			]
		}
	}
	
	
	
}
	
	
</script>

<style>
	.navContent{
		height: 30px;
		padding: 5px 0;
		background-color: #f6f6f6;
	}
	.search{
		position: relative;
		text-align: center;
	}
	.search input{
		margin: 0 auto;
		background-color: #D3D3D3;
		border-radius: 5px;
		border:none;
		text-decoration: none;
		width: 70%;
		height: 25px;
		outline: none;
		padding-left:5px ;
	}
	.search_left{
		position: absolute;
		left: 5px;
	}
	.search_left i{
		margin-top: 6px;
		margin-left: 5px;
	}
	.search_right{
		position: absolute;
		right: 5px;
		padding-right: 5px;
		font-size: 1.4rem;
	}
	#banner img{
		width: 100%;
	}
	.head_tit div{
		width: 100%;
		overflow-x: scroll;
		height: 20px;
	}

	.titList{
		/*padding: 5px;*/
		/*float: left;*/
	}
	.gift img{
		width: 100%;
	}
	.cont_tit{
		overflow: hidden;
		border-bottom: 3px solid #D3D3D3;
	}
	.cont_tit div{
		float: left;
		width: 20%;
		text-align: center;
	}
	.tit_box{
		margin: 0 auto;
		color: #ffffff;
		background-color: #FD9A01;
		width: 100px;
		text-align: center;
		padding: 5px 0;
	}
</style>