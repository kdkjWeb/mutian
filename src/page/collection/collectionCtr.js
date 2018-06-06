export default {
	data() {
		return {
			myurl: '', //img 公用地址
			shopCarNum:0,
			goodsList: [],
			isShow: false, //是否是编辑状态
			checkboxModel: [], //选中的商品
			allState: false, //全选状态
		}
	},
	mounted: function() {
		let _this = this;

		_this.goodsList.forEach(function(item, index) { //给商品添加选中状态
			if(item.isActive == undefined) {
				_this.$set(item, 'isActive', false);
			};
		})
	},
	methods: {
		
		mNum(){
			let _this = this;

			_this.goodsList.forEach(function(item, index) { //给商品添加选中状态
				if(item.isActive == undefined) {
					_this.$set(item, 'isActive', false);
				};
			})
		},

		change() {   //编辑状态改变
			let Show = this.isShow;

			switch(Show) {
				case false:
					this.isShow = true;
					break;
				case true:
					this.isShow = false;
					break;
			}
		},

		changeActive(item, index) {   // 选中按钮点击
			let _this = this;
			if(item.isActive) {
				item.isActive = false;
				_this.checkboxModel.splice(0, 1); 
			} else {
				item.isActive = true;
				_this.checkboxModel.push('');
			}
		},
		
		allDo(){
			let falg = this.allState;
			let _this = this;

			//如果是没有全部选中状态
			if(falg == false) {  
				_this.checkboxModel = [];
				this.goodsList.forEach(function(item, index) { //遍历data 里的 goods 数组
					item.isActive = true;
					_this.checkboxModel.push('');
				});
				_this.allState = true;
			} else {
				this.goodsList.forEach(function(item, index) { //遍历data 里的 goods 数组
					_this.$set(item, "isActive", false); //遍历所有状态，将状态设为不选中状态\
				});
				_this.allState = false;
				_this.checkboxModel = [];
			}
		},
		
//		获取收藏列表

		getFavoriteList(){
			this.$post('favorite/getFavoriteList',{
			}).then(res=>{
				if(res.code==0){
					this.goodsList = res.data;
					this.mNum();
				}
			})
		},
		
//		=============获取购物车数量======
		getshopcarList(){
			let _this = this;
			_this.$post('shoppingCart/getShoppingCartList',{
			}).then(res=>{
				console.log(res)
				if(res.code == 0){
					this.shopCarNum = res.data.list.length;
				}
			})
		},
		
//		==========跳转购物车
		goShopcar(){
			this.$router.push({
				name:'shoppingcar'
			})
		},
		
//	===========收藏的加入购物车=====	
		addShopcar(id){
			this.$post('shoppingCart/addShoppingCart',{
				goodsId:id
			}).then(res=>{
				if(res.code==0){
					this.$toast('加入成功');
					this.getshopcarList()   //====获取购物车数量======
				}
			})
		},
		
//		========删除收藏==============
		delGoods(){
			let arr = [];
			this.goodsList.forEach((item,index)=>{  //遍历每个商品
				if(item.isActive){ //如果商品为选中状态  
					arr.push(item.id);
				}
			})
			if(arr.length<1){
				return false
			}
			let delList = arr.join(',');
			
			this.$get('favorite/delFavorites',{
				ids:delList
			}).then(res=>{
				if(res.code==0){
					var newArr = [];
					
					this.goodsList.forEach((item,index)=>{  //遍历每个商品
						if(!item.isActive){ //如果商品为非选中状态  
							newArr.push(item);
						}
					})
					this.goodsList = newArr;
					this.allState = false; //全选状态
					this.checkboxModel = []; //选中的商品id集合
					this.isShow = false; //是否是编辑状态
					this.allState = false, //全选状态
					
					this.$toast('删除成功');
				}
				
			})
		},
//		=======返回上级=====
		 back(){
        	this.$router.go(-1);
        },
		
	},
	created() {
		this.getFavoriteList();  //获取列表
		this.getshopcarList()   //====获取购物车数量======
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	},
	watch: { //深度 watcher
		'checkboxModel': {
			handler: function(val, oldVal) {
				if(this.checkboxModel.length === this.goodsList.length) {
					this.allState = true;
				} else {
					this.allState = false;
				}
			},
			deep: true
		}
	}
	
}