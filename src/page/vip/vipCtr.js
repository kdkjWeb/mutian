export default {
  name: "vip1",
  data(){
    return{
      activeIndex:"",
      selected:"1"
    }
  },
  methods:{
//  goback(){
//    this.$router.go(-1)
//  },
//  /*
//    充值/转账/提现
//   */
//  getMony(val){
//    this.$router.push("cash?type="+val);
//  },
//


    /*
      表格明细
    */

    //本月个人奖金累积个人奖金
    /*linkTo(val){
      console.log(val)
      switch(val){
        case 0:
        this.$router.push({
          name: 'vip'
        })
        break;
        case 1:
        this.$router.push({
          name: 'monthbouns'
        })
        break;
        case 2:
        this.$router.push({
          name: 'accumulativebouns'
        })
        break;
      }
    },*/
    gotable(val){
      switch(val){
        case 0:
        this.$router.push({
          name: 'mycustomer'
        })
        break;
        case 1:
        this.$router.push({
          name: 'myteam'
        })
        break;
        case 2:
        console.log('推广二维码')
        break;
        case 3:
        this.$router.push({
          name: 'bondbankcard'
        })
        break;
        case 4:
        this.$router.push({
          name: 'teamleaderboard'
        })
        break;
        case 5:
        this.$router.push({
          name: 'allteamleaderboard'
        })
        break;
      }
    }	
  },
  watch: {
    // 监听selected属性   切换页面
    selected(newValue){
      if(newValue == 1){
        this.$router.push({
          name: 'vip'
        })
      }else if(newValue == 2){
        this.$router.push({
          name: 'monthbouns'
        })
      }else if(newValue == 3){
        this.$router.push({
          name: 'accumulativebouns'
        })
      }
    }
  }
}
