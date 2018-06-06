<template>
	<div class="search">
		<div class="title">
            <i class="mint-toast-icon mintui mintui-back" @click="back"></i>
	           搜索
	    </div>
	      
	      <div class="hotPro-btm">
				<div class="hotProduct" v-for="item in  searchList" :key="item.id" @click="toDetails(item.id)">
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
</template>

<script>
	export {default} from './searchCtr'
</script>

<style scoped>
	/*头部*/
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

/*================*/
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