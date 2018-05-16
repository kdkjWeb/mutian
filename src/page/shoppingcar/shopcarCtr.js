export default {
  data(){
    return{
    	full:15,   //满多少包邮
    	reduce:5,    //差多少
    	all:false,
    	goods:[{
    		goodsName:"冷吃兔",
    		isChecked:false,
    		goodsImg:'',
    		goodMoney:25,
    		goodsNumner:2,
    		goodId:1
    	},{
    		goodsName:"辣子鸡",
    		isChecked:false,
    		goodsImg:'',
    		goodMoney:25,
    		goodsNumner:2,
    		goodId:2
    	},{
    		goodsName:"芋儿鸡",
    		isChecked:false,
    		goodsImg:'',
    		goodMoney:25,
    		goodsNumner:2,
    		goodId:3
    	}]
    }
  },methods:{
    	changebox(index){
    		this.goods[index].isChecked = !this.goods[index].isChecked ;
    	},
    	allDo(){
    		
    	}
    	
    }
}