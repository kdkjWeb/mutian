export default {
	data() {
		return {
			banner:[],  //轮播图
			goodsId:'',   //商品id
			myurl: '', //img 公用地址
			goods: {
				disPrice: '', //现价
				price: '', //原价
				commission: '', //佣金
				salesvolume: '0', //月销多少
				title: '', //名字
				content: '', //描述
				favorite: '', //是否收藏
				
				
				//              shipping: '包邮',
				//              numprice: '98'
			},
			recommendedList: [], //推荐的相关产品
			serverList: [{
				title: '闪电发货'
			}, {
				title: '真品包邮'
			}, {
				title: '急速物流'
			}, {
				title: '优质服务'
			}],
			discussList: [{
				url: 'static/images/1.png',
				userPhone: '13594987654',
				content: '很好！很满意，物流也很快很好！很满意，物流也很快'
			}, {
				url: 'static/images/1.png',
				userPhone: '13594987654',
				content: '很好！很满意，物流也很快'
			}, {
				url: 'static/images/1.png',
				userPhone: '13594987654',
				content: '很好！很满意，物流也很快'
			}],
			productdetailsList: [{
				url: 'static/images/DSC_5578.png'
			}, {
				url: 'static/images/DSC_5578.png'
			}, {
				url: 'static/images/DSC_5578.png'
			}, {
				url: 'static/images/DSC_5578.png'
			}]
		}
	},
	methods: {
//		====返回============
		back(){
        	this.$router.go(-1);
       },
		//  	======根据id获取商品详情=================
		getGoods() {
			let _this = this;
			_this.$get('goods/getGoodsById', {
				id: this.goodsId
			}).then(res => {
				console.log(res);
				if(res.code == 0) {
					
					_this.goods.disPrice = res.data.disPrice; //现价
					_this.goods.price = res.data.price; //原价
					_this.goods.title = res.data.name //商品名称
					_this.goods.content = res.data.description //商品描述

					_this.goods.commission = _this.$common.Subtr(res.data.price, res.data.disPrice); //佣金
					
					_this.isFavorite(res.data.ifFavorite);  //判断是否收藏
					
					_this.banner = [];//清空
					if(res.data.picture != null){
						_this.banner.push({'url':res.data.picture});
					}
					if(res.data.pic1 != null){
						_this.banner.push({'url':res.data.pic1});
					}
					if(res.data.pic2 != null){
						_this.banner.push({'url':res.data.pic2});
					}
					if(res.data.pic3 != null){
						_this.banner.push({'url':res.data.pic3});
					}
					if(res.data.pic4 != null){
						_this.banner.push({'url':res.data.pic4});
					}
					
				}

			})
		},


		//		==========获取产品推荐=============
		getRandomGoods(){
			let _this = this;
			_this.$post('goods/getRandomList', {}).then(res => {
				if(res.code == 0) {
					this.recommendedList = []; //清空相关产品推荐
					for(var i = 0; i < 2; i++) {
						this.recommendedList.push(res.data.list[i])
					}
				}

			})
		},
		
//		====加入购物车==============
		addShopcar(){
			this.$post('shoppingCart/addShoppingCart',{
				goodsId:this.goodsId
			}).then(res=>{
				if(res.code==0){
					this.$toast('加入成功');
				}else{
					this.$toast('加入失败');
				}
			})
		},
		
//		=======收藏，取消收藏==========
		isFavorite(state){
			if(state == 'n'){
				this.goods.favorite = false
			}else{
				this.goods.favorite = true;
			}
		},
		
		star(){
			if(this.goods.favorite){
				this.delFavorite();
			}else{
				this.addFavorite();
			}
		},
		
		addFavorite(){
			this.$post('favorite/addFavorite',{
				goodsId:this.goodsId
			}).then(res=>{
				if(res.code ==0){
					this.$toast('收藏成功');
					this.goods.favorite = true;
				}else{
					this.$toast('收藏失败');
				}
			})
		},
		
		delFavorite(){
			this.$get('favorite/delFavorite',{
				id:this.goodsId
			}).then(res=>{
				if(res.code ==0){
					this.$toast('取消收藏成功');
					this.goods.favorite = false;
				}else{
					this.$toast('取消收藏失败');
				}
			})
		},
		
//		==========跳转购物车============
		goCar(){
			this.$router.push({
				name:'shoppingcar'
			})
		},
		
//		===========跳转到推荐相关产品的详情页============
		recommGoods(item){
			let id = item.id
			this.$router.push({
				name:'productdetails',
				query:{goodsId:id}
			})
		},
//		======立即购买================
		buyNow(){
			this.$router.push({
				name:'confirmorder'
			})
		},
		
	},
	created() {
		window.scroll(0, 0);
		let id = this.$route.query.goodsId;
		this.goodsId = id;
		
		this.getGoods(); //根据id获取产品详情

		this.getRandomGoods() //获取产品推荐
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	},
	watch: {
	'$route': function (route) {
		let id = this.$route.query.goodsId;
			this.goodsId = id;   //设置当前产品id
			
			this.getGoods();    //获取产品详情
			this.getRandomGoods();   //获取相关产品推荐   
		}
	}
}