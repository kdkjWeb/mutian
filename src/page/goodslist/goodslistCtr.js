export default{
	data(){
		return{
			myurl: '', //img 公用地址
			HotList:[], 
		}
	},
	methods:{
//		=======获取分类id=
		getTypeList(id){
			if(id==''||id == undefined){
				this.getHotlist();
			}else {
				console.log('other');
				this.getOtherlist(id);
			}
		},
//		=======热销列表==============
		getHotlist(){
			let _this = this;
			this.$get('goods/getHotGoods',{
				pageSize:10
			}).then(res=>{
				let code = res.code;
				switch(code) {
					case 0:
					_this.HotList = res.data.list;
					break;	
				}
			})
		},
	
//	===========其他自定义列表========
		getOtherlist(id){
			let _this = this;
			this.$post('goods/getGoodsList',{
//				pageSize:10,	
				type:id
			}).then(res=>{
				let code = res.code;
				switch(code) {
					case 0:
					_this.HotList = res.data.list;
					break;	
				}
			})
		},

		//		======跳转商品详情页面========
		toDetails(id) {
			this.$router.push({
				name: 'productdetails',
				query:{goodsId:id}
			})
		},
		
		addCollect(){
			
		},
		
		
		
		
	},
	created() {
		window.scroll(0, 0);
		let id = this.$route.query.Id;
		this.getTypeList(id);
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	},
	watch: {
		'$route': function (route) {
			let id = this.$route.query.Id;
			this.getTypeList(id);
		  },
		}
}
