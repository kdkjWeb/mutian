export default{
    data(){
        return{
      	  myurl:'',  //图片地址	
          gooDs:[]
        }
    },
    methods: {
    	getKill(){
    		this.$get('goods/getSpikeGoods',{
    		}).then(res=>{
    			if(res.code==0){
//  				console.log(res)
					this.gooDs = res.data
    			}
    			
    		})
    	},
    	//		=======返回上级=====
		 back(){
        	this.$router.go(-1);
        },
    	
    	
    	
    },
    created() {
		this.getKill();  //获取购物车列表
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	},
}