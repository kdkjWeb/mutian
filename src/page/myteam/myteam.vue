<template>
	<div class="myteam"><!--我的团队-->
		<mt-header title="我的团队">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		
		<div class="head">
			<span>直属：<span>{{Colleges}}人</span></span>
			<span>共：<span>{{Total}}人</span></span>
		</div>
		
		<!--团队成员-->
		<div>
			
			<div class="people" v-for="(people,index) in peoples" :key="index">
				<div class="people_head">
					<span class="pName">{{people.name}}</span>
					<span class="Pwx">微信号：<span>{{people.wechart}}</span></span>
					<span class="pNum">电话：<span>{{people.phone}}</span></span>
				</div>
				<div class="pContent">
					<img src="../../../static/images/1.png" alt="" />
					<div>
						<span>他的团队({{people.teamNum}})人</span>
						<span>团队月销<span>{{people.monthMoney}}</span>元</span>
						<span>团队奖金<span>{{people.teameMoney}}</span>元</span>
					</div>
				</div>
			</div>
			
			
		</div>
		
	</div>
</template>

<script>
	export {default} from './myteamCtr'
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
	
	/*==haad=*/
	.head{
		height: .6rem;
		line-height: .6rem;
		font-size: .16rem;
		text-align: right;
	}
	.head>span{
		margin-right: .3rem;
	}
	.head>span>span{
		color: #fd9031;
	}
	
	/*========团队成员*/
	.people{
		background-color: #FFFFFF;
		font-size: .16rem;
		padding: .3rem;
		overflow: hidden;
		margin-bottom: .15rem;
	}
	.people_head{
		height:.7rem;
		line-height: .7rem;
		border-bottom: 2px solid #e8e8e8;
		text-align: center;
	}
	.pName{
		float: left;
	}
	.pNum{
		float: right;
	}
	.Pwx span,.pNum span{
		color: #fe902e;
	}
	
	.pContent{
		overflow: hidden;
		border-bottom: 2px solid #e8e8e8;	
	}
	.pContent img{
		width: 1.35rem;
		height: 1.35rem;
		border-radius: 100%;
		display:block;
		float: left;
		margin: .3rem 0;
	}
	.pContent div{
		padding-top: .2rem;
		float: left;
		margin-left: .5rem;
		/*width: 4.5rem;*/
	}
	.pContent div>span{
		font-size: .18rem;
		font-weight: 700;
		display: block;
		margin-bottom: .23rem;
	}
	.pContent div>span>span{
		color: red;
	}
</style>