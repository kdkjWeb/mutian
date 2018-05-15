<template>
  <div class="teamleaderboard">
      <div class="title">
            <i class="mint-toast-icon mintui mintui-back"></i>
            总团队排行榜
      </div>
      <div style="height: .9rem"></div>
      <div class="teamleaderboard_banner">
          <img src="static/images/allteam.png" width="100%" height="100%" alt="团队排行榜">
      </div>

      <!-- 团队排行榜选项 -->
      <ul class="teamleaderboard_card">
          <li v-for="(item,index) in cardTitlt" :key="index" @click="changeCard(index)">
              <span :class="{'active': index == activeIndex}">{{item.title}}</span>
          </li>
      </ul>
      <p class="notice_leaderboard">我的累计收入0元，排行第100名以外</p>

      <!-- 排行列表 -->
      <ul class="leaderboard_list">
          <li v-for="(item,index) in leaderboardList" :key="index">
              <div>
                  <dl>
                    <dt class="user_header">
                        <img :src="item.src" width="100%" height="100%" alt="头像">
                    </dt>
                    <dd class="user_name"><span>{{item.userName}}</span>({{item.userPhone}})</dd>
                    <dd>
                        <span>{{item.userNum}}</span>个伙伴
                        <span class="ranking">第{{item.userRanking}}名</span>
                        <span v-if="index<3" class="iconfont icon-huangguan1" :class="{'color' : index==0 || index==2}"></span>    
                    </dd>
                  </dl>
                  <span class="money">¥<span>{{item.userMoney}}</span></span>
              </div>
          </li>
      </ul>
  </div>
</template>


<script>
export {default} from './allteamleaderboardCtr'
</script>


<style scoped>
.teamleaderboard{
    background-color: #fff;
}
.title{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
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



.teamleaderboard_banner{
    width: 100%;
    height: 2.75rem;
}

.teamleaderboard_card{
    display: flex;
    display: -webkit-flex;
    font-size: .34rem;
}
.teamleaderboard_card li{
    list-style: none;
    flex: 1;
    text-align: center;
    padding: .15rem 0;
    color: #fe9e25;
    box-sizing: border-box;
}
.active{
    border-bottom: .05rem solid red;
    padding-bottom: .1rem;
}

.notice_leaderboard{
    font-size: .3rem;
    background-color: #ffbb66;
    text-align: center;
    color: #fff;
    padding: .12rem 0;
}


.leaderboard_list li{
    padding: .25rem .2rem 0;
    box-sizing: border-box;
    font-size: .32rem;
    height: 1.6rem;
}
.leaderboard_list li div{
    position: relative;
    border-bottom: .03rem solid #d2d2d2;
    width: 100%;
    height: 100%;
}
.leaderboard_list li dl dd:last-child{
    font-size: .3rem;
}
.user_header{
    width: 1.05rem;
    height: 1.05rem;
    border-radius: 50%;
    border: .1rem solid #ff7573;
    float: left;
    margin-right: .33rem;
    overflow: hidden;
}
.user_header img{
    border-radius: 50%;
    display: block;
}
.leaderboard_list li dl dd.user_name{
    padding: .1rem 0;
}
.leaderboard_list li dl dd.user_name span{
    padding-right: .25rem;
}
.leaderboard_list li div span.money{
    position: absolute;
    right: 0;
    top: .4rem;
    color: #ff231e;
}
.leaderboard_list li div span.money span{
    padding-left: .1rem;
}
.ranking{
    padding: 0 .1rem 0 .2rem;
    color: #ff231e;
}

.color{
    color: #ff8f02;
}
</style>

