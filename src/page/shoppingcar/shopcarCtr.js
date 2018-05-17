export default {
	data() {
		return {
			totalMoney:0, //总金额
			full: 15, //满多少包邮
			reduce: 5, //差多少
			allState: false, //全选状态
			checkboxModel: [], //选中的商品id集合
			goods: [{
				goodsName: "冷吃兔",
				goodsImg: '', //商品图片
				goodMoney: 2, //商品价格
				goodId: 1 //id
			}, {
				goodsName: "辣子鸡",
				goodsImg: '',
				goodMoney: 25,
				goodId: 2
			}, {
				goodsName: "芋儿鸡",
				goodsImg: '',
				goodMoney: 5,
				goodId: 3
			}]
		}
	},
	mounted: function() {
//		=====为所有商品信息添加一个数量字段
		let _this = this;
		_this.goods.forEach(function(item, index) {
			if(item.goodsNum == undefined) {   //添加商品数量属性
				_this.$set(item,'goodsNum',0)
			};
			
			if(item.goodsTotal  == undefined){   //添加商品 单个总价 属性
				_this.$set(item,'goodsTotal',0)
			}
			
			if(item.isActive  == undefined){
				_this.$set(item,'isActive',false)   //添加商品是否选中属性
			}
			
		});
	},
	methods: {
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
			console.log(item.isActive)
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
			if(item.goodsNum != undefined) {
				if(type > 0) {   //按加按钮时加一
					item.goodsNum = item.goodsNum + 1;
					item.goodsTotal = item.goodMoney*item.goodsNum;
				} else {
					if(item.goodsNum != 0){  //  当数量不等于0的时候继续减一
						item.goodsNum = item.goodsNum - 1;
						item.goodsTotal = item.goodMoney*item.goodsNum;
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
		}

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