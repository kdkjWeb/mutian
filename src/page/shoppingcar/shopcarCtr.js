export default {
	data() {
		return {
			myurl: '', //img 公用地址
			full: 15, //满多少包邮
			reduce: 5, //差多少
			myurl: '', //img 公用地址
			isShow: false, //是否是编辑状态
			totalMoney:0, //总金额
			allState: false, //全选状态
			checkboxModel: [], //选中的商品id集合
			goods: [],
		}
	},
	methods: {
//		============
		mNum(){
			let _this = this;
			_this.goods.forEach(function(item, index) {
				if(item.goodsTotal  == undefined){   //添加商品 单个总价 属性
					let mNum = item.number * item.market_price;
					_this.$set(item,'goodsTotal',mNum)
				}
				if(item.isActive  == undefined){
					_this.$set(item,'isActive',false)   //添加商品是否选中属性
				}
			});
		},
		 //=========全选按钮事件
		allDo() {
			let falg = this.allState;
			let _this = this;

			//如果是没有全部选中状态
			if(falg == false) {  
				_this.checkboxModel = [];
				this.goods.forEach(function(item, index) { //遍历data 里的 goods 数组
					item.isActive = true;
					_this.checkboxModel.push('');
				});
				_this.allState = true;
			} else {
				this.goods.forEach(function(item, index) { //遍历data 里的 goods 数组
					_this.$set(item, "isActive", false); //遍历所有状态，将状态设为不选中状态\
				});
				_this.allState = false;
				_this.checkboxModel = [];
			}
			
			this.calTotalMoney();  //计算总价
		},
		
		//===============每个单选按钮点击事件
		changebox(item, index) { 
			let _this = this;
//			console.log(item.isActive)
			if(item.isActive) {
				item.isActive = false;
				_this.checkboxModel.splice(0, 1); 
			}else{
				item.isActive = true;
				_this.checkboxModel.push('');
			}
			this.calTotalMoney(); //计算总价
		},

		//		=========加减数量======
		changeMoney: function(item, type) {
			if(item.number != undefined) { 
				if(type > 0) {   //按加按钮时加一
					item.number = item.number + 1;
					item.goodsTotal = item.market_price*item.number;  //计算每个商品总价
					this.updateCar(item.id,item.number); //update购物车商品数量
				} else {
					if(item.number != 0){  //  当数量不等于0的时候继续减一
						item.number = item.number - 1;
						item.goodsTotal = item.market_price*item.number;
						this.updateCar(item.id,item.number);//update购物车商品数量
					}
				}
			}
			
			this.calTotalMoney(); //计算总价
		},
		
//		=====计算总金额==========
		calTotalMoney:function(){
			this.totalMoney = 0;   //再次初始化 总金额为0
			this.goods.forEach((item,index)=>{  //遍历每个商品
				if(item.isActive){ //如果商品为选中状态  
					this.totalMoney = this.totalMoney+item.goodsTotal;   //总价等于 总价加商品总价
				}
			})
		},
		
//		=====获取购物车列表===========
		getshopcarList(){
			let _this = this;
			_this.$post('shoppingCart/getShoppingCartList',{
			}).then(res=>{
				console.log(res)
				if(res.code == 0){
					_this.goods = res.data.list;
					this.mNum();
				}
				
			})
		},
		
		
//		=====编辑按钮======
		showGoods(){
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
	
//============删除购物车================
		delGoods(){
			let arr = [];
			this.goods.forEach((item,index)=>{  //遍历每个商品
				if(item.isActive){ //如果商品为选中状态  
					arr.push(item.id);
				}
			})
			if(arr.length<1){
				return false
			}
			let delList = arr.join(',');
			
			this.$get('shoppingCart/delShoppingCart',{
				ids:delList
			}).then(res=>{
				if(res.code==0){
					var newArr = [];
					
					this.goods.forEach((item,index)=>{  //遍历每个商品
						if(!item.isActive){ //如果商品为非选中状态  
							newArr.push(item);
						}
					})
					this.goods = newArr;
					this.allState = false; //全选状态
					this.checkboxModel = []; //选中的商品id集合
					this.totalMoney = 0; //选中总价
					this.isShow = false; //是否是编辑状态
					this.allState = false, //全选状态
					this.$toast('删除成功');
				}
				
			})
		},
		
//		========x修改购物车商品数量=========
		updateCar(id,num){
			this.$post('shoppingCart/updateShoppingCart',{
				id:id,
				number:num
			}).then(res=>{
			})
		},

	},
	created() {
		this.getshopcarList();  //获取购物车列表
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	},
	watch: { //深度 watcher
		'checkboxModel': {
			handler: function(val, oldVal) {
				if(this.checkboxModel.length === this.goods.length) {
					this.allState = true;
				} else {
					this.allState = false;
				}
			},
			deep: true
		}
	}
	

}