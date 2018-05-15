<template>
  <div class="vip">
  	
    <div class="basic-info">
      <div class="left"><img src="../../../static/images/tx.png"/></div>
      <div class="right">
      	<div class="right_son">
	      	<div class="name">扯谈</div>
	        <div class="phone">18888888888</div>	
      	</div>
        <div class="arrow"><i class="iconfont icon-youjiantou2"></i></div>
      </div>
    </div>


    <!--bannar部分-->
    <div class="banner">
      <p class="sum">当月总工资：</p>
      <p class="money"><span>200.60</span><span class="yuan">元</span></p>
      <p class="detail">查看详情 <i class="iconfont icon-shuangjiantou"></i></p>
    </div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">今年个人奖金</mt-tab-item>
      <mt-tab-item id="2">本月个人奖金</mt-tab-item>
      <mt-tab-item id="3">累计个人奖金</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="26.8元" is-link></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell title="46.8元"  is-link></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell title="56.8元"  is-link></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

      <!--最下6格部分-->
      <div class="bottom">
        <div @click="gotable(0)">
          <p class="bot_p kh"><i class="iconfont  icon-web-icon-"></i></p>
          <p class="category">我的客户</p>
        </div>
        <div @click="gotable(1)">
         <p class="bot_p wdtd"><i class="iconfont  icon-tuandui3"></i></p>
          <p class="category">我的团队</p>
        </div>
        <div @click="gotable(2)">
         <p class="bot_p ewm"><i class="iconfont  icon-erweima"></i></p>
          <p class="category">推广二维码</p>
        </div>
        <div @click="gotable(3)">
          <p class="bot_p yhk"><i class="iconfont icon-icon-copy1"></i></p>
          <p class="category">绑定银行卡</p>
        </div>
        <div @click="gotable(4)">
          <p class="bot_p td"><i class="iconfont icon-paihang"></i></p>
          <p class="category">团队排行榜</p>
        </div>
        <div @click="gotable(5)">
          <p class="bot_p ztd"><i class="iconfont icon-xunzhang"></i></p>
          <p class="category">总团队排行榜</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default require("./vipCtr")
</script>

<style scoped>

  .basic-info{
    background: #e7e7e7;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .basic-info .left{
  	margin-top: .2rem;
  	margin-left: .2rem;
  	margin-bottom: .2rem;
    background: #F2798A;
    width:2.5rem;
    height:2.5rem;
    border-radius: 100%;
  }
	.basic-info .left img{
		width: 90%;
		height: 90%;
		padding: 5%;
	}
  .basic-info .right{
    margin-top: 35px;
    width:65%;
  }
	.right_son{
		float: left;
		width: 3rem;
	}
  .basic-info .right .name,.phone{
  	margin-bottom: .3rem;
    text-align: left;
    font-size: .4rem;
    font-weight: 400;
   	margin-left: .5rem;
  }

  .basic-info .right .arrow{
  	float: right;
  	margin-right: .4rem;
  }
	.basic-info .right .arrow i{
		font-size: .5rem
	}
  /*
  icon样式
   */
  .bottomIcon1{
     border: 1px solid rgb(138,205,237);
    color:rgb(138,205,237);
  }
  .bottomIcon2{
    border: 1px solid rgb(226,120,195);
    color:rgb(226,120,195);
  }
  .bottomIcon3{
    border: 1px solid #F88412;
    color:#F88412
  }
  .bottomIcon4{
    border: 1px solid rgb(166,232,179);
    color:rgb(166,232,179);
  }
  i {
    font-size: .3rem;
  }
	
	.bottom i{
		color: #FFFFFF;
	}
	.bottom .bot_p{
		width: 1.45rem;
		height: 1.45rem;
		line-height: 1.4rem;
		text-align: center;
		display: block;
		margin: 0 auto;
		border-radius: 100%;
		margin-top: .2rem;
	}
	.kh{
		background-color: #ec741e;
	}
	.wdtd{
		background-color: #b66fab;
	}
	.ewm{
		background-color: #e50754;
	}
	.yhk{
		background-color: #1ba359;
	}
	.td{
		background-color: #25acec;
	}
	.ztd{
		background-color: #ff9201;
	}
	.icon-web-icon-{
		font-size: 1.2rem;
	}
	.icon-tuandui3{
		font-size: .9rem;
	}
	.icon-erweima{
		font-size: .8rem;
	}
	.icon-icon-copy1{
		font-size: 1rem;
	}
	.icon-paihang{
		font-size: 1rem;
	}
	.icon-xunzhang{
		font-size: 1rem;
	}
	
	
  /*
六格可提现部分
*/
  .bottom {
    width: 100%;
    /* margin-top: 2%; */
    background-color: #e7e7e7;
  }

  .bottom > div {
    width: 2.1rem;
    height: 2.3rem;
    float: left;
    margin-left: .32rem;
    margin-top: .3rem;
    background-color: #FFFFFF;
    border-radius: .2rem;
    overflow: hidden;
    text-align: center;
  }

  .bottom .category{
    font-size: .13rem;
    margin-top: .12rem;
  }

  /*
  收益部分
  */
  .content {
    width: 100%;
    background-color: rgba(220, 220, 220, 0.19);
  }

  .content .getMony {
    width: 90%;
    background-color: white;
    margin: 2% auto;
    padding: 5% 5%;
    display: flex;
    justify-content: space-between;
  }

  .icon {
    margin-left: 5px;
  }

  /*<!--头部-->*/

  * {
    margin: 0;
    padding: 0;
  }

  .navContent {
    width: 92%;
    text-align: left;
    padding: 3% 4%;
    display: flex;
    justify-content: start;
    line-height: 35px;
    background-color: rgba(220, 220, 220, 0.4);
  }

  .el-icon-arrow-left {
    font-size: 30px;
    width: 27%;
  }

  .navContent > p {
    font-size: 20px;
    color: rgb(240, 51, 53);
  }

  /*
bannar
 */
  .banner {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    text-align: left;
    overflow: hidden;
    background-color: #e79120;
  }

  .banner > p {
    width: 30%;
    text-align: center;
    margin: 4% auto;
  }

  .banner .sum {
    font-size: .35rem;
    font-weight: 500;
    margin-right: 0;
    margin-left: 0;
    padding-left: 5px;
  }

  .banner .money {
    font-size: .8rem;
    font-weight: 580;
    display: inline-table;
    color:white;
    margin-left:0

}

  .banner .detail {
    font-size: .23rem;
    color:white;
    margin-left: 0;
    margin-right: 0;
    text-align: right;
    padding-right: 5px;
  }
	.banner .detail i{
		font-size: .05rem;
	}
  .yuan{
    font-size: .2rem;
  }

  .mint-tab-item-label{
    color:red;
  }
  /*-======*/
 	.mint-navbar{
 		border-bottom:2px solid #d3d3d3 ;
 	}
	.mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 3px solid #d0393e;
	    color: #d0393e;
	}
</style>
