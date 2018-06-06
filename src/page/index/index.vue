<template>
	<div id="index">
		<!--顶部搜索-->
		<div class="navContent">
			<div class="search">
				<div class="search_left">
					<i class="mint-toast-icon mintui mintui-back"></i>
				</div>
				<input type="text" placeholder="输入要搜索的商品" v-model="searchIpt">
				<span class="search_right" @click="search"><i class="iconfont icon-xinxi"></i></span>
			</div>
		</div>

		<div id="banner">
			<img :src="imgUrl" alt="" />
		</div>

		<div class="sortMenu">
			<ul class="sortMenu-ul">
				<li class="cell" v-for="(item,index) in titList" :key="index" @click="linkTo(item,index)">
					<span>{{item.typeName}}</span>
				</li>
			</ul>
		</div>

		<router-view/>

	</div>
</template>

<script>
	export {
		default
	}
	from './indexCtr'
</script>

<style scoped>
	/*=====标题样式=========*/
	
	.sortMenu {
		width: 100%;
		background-color: #fff;
		overflow-x: scroll;
		-webkit-overflow-x: scroll;
		border-bottom: .12rem solid #D3D3D3;
	}
	
	.sortMenu::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: #fff;
	}
	
	.sortMenu-ul {
		min-width: 8rem;
		display: flex;
		justify-content: flex-start;
	}
	
	.sortMenu .cell {
		display: inline-block;
		font-size: 12px;
		margin: 0px 1em;
		height: 40px;
		line-height: 40px;
		text-align: center;
		position: relative;
		text-overflow: ellipsis;
		word-break: keep-all;
	}
		#index {
		position: relative;
		background-color: #F6F6F6;
	}
	
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
		left: .2rem;
		top: .27rem;
	}
	
	.search_right {
		position: absolute;
		right: .2rem;
		top: .1rem;
		color: #D3D3D3;
	}
	
	.search_right i {
		font-size: .5rem;
	}
	
	#banner img {
		width: 100%;
		display: block;
	}

</style>