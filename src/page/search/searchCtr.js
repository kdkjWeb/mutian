export default{
    data(){
        return{
        	searchIpt:'',//搜索输入框
        	myurl:'', //图片公共dishi
      	 	searchList: [{}],  
        }
    },
    methods: {
    	//		=======返回上级=====
		back(){
        	this.$router.go(-1);
        },
    	
    	getList(){
    		this.$post('goods/getGoodss',{
    			name:this.searchIpt
    		}).then(res=>{
    			if(res.code == 0){
    				this.searchList = res.data.list;
    			}
    		})
    	},
    	
    	//		======跳转详情页面========
		toDetails(id) {
			console.log(id)
			this.$router.push({
				name: 'productdetails',
				query:{goodsId:id}
			})
		},
    	
    	//		========添加购物车==========
		addCollect(id){
			this.$post('shoppingCart/addShoppingCart',{
				goodsId:id
			}).then(res=>{
				if(res.code==0){
					this.$toast('加入成功');
				}else{
					this.$toast('加入失败');
				}
			})
		},
		
		
    },
    created() {
    	this.searchIpt = this.$route.query.sText;
    	this.getList();
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	},
}