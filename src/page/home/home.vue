<template>
    <div>
        <div class="container">
            <router-view/>
        </div>
        <footer class="footer">
            <ul>
                <li v-for="(item,index) in footerList" :key="index" @click="footerlinkTo(index)" :class="{'active': index == activeIndex}">
                <span class="iconfont" :class="item.icon"></span>
                <span>{{item.title}}</span>
                </li>
            </ul>
        </footer>
    </div>
</template>


<script>
export default {
    data(){
        return{
            activeIndex: 0,
            footerList: [
                {
                title: '首页',
                icon: 'icon-shouye1'
                },{
                title: '会员',
                icon: 'icon-tubiaozhizuomoban'
                },{
                title: '购物车',
                icon: 'icon-gouwuchekong'
                },{
                title: '个人中心',
                icon: 'icon-gerenzhongxin'
                }
            ]
        }
    },
    methods:{
        			  //底部导航栏跳转到相应页面
			  footerlinkTo(index){
				this.activeIndex = index;
				switch (index) {
					case 0:
					this.$router.push({
					  name: 'index'
					})
					break;
					case 1:
					this.$router.push({
					  name: 'memberbenefits'
					})
					break;
					case 2:
					this.$router.push({
					  name: 'shoppingcar'
					})
					break;
					case 3:
					this.$router.push({
					  name: 'personalcenter'
					})
					break;
				}
			  }
    }
}
</script>


<style scoped>
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.1rem;
    background-color: #fff;
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    flex: 1;
    text-align: center;
    list-style: none;
    font-size: .34rem;
    padding: .05rem 0; 
  }
  .footer ul li span.iconfont{
    display: block;
    font-size: .5rem;
  }
  .active{
    color: #1dd871;
  }
  .container{
      margin-bottom: 1.1rem;
  }
</style>
