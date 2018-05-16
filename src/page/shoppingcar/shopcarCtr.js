export default {
	data() {
		return {
			full: 15, //满多少包邮
			reduce: 5, //差多少
			allState: false, //全选状态
			checkboxModel: [], //选中的商品id集合
			goods: [{
				goodsName: "冷吃兔",
				goodsImg: '', //商品图片
				goodMoney: 25, //商品价格
				goodId: 1 //id
			}, {
				goodsName: "辣子鸡",
				goodsImg: '',
				goodMoney: 25,
				goodId: 2
			}, {
				goodsName: "芋儿鸡",
				goodsImg: '',
				goodMoney: 25,
				goodId: 3
			}]
		}
	},
	methods: {
		allDo() { //全选按钮事件
			let falg = this.allState;
			let _this = this;

			if(falg == false) {
				this.goods.forEach(function(item, index) { //遍历data 里的 goods 数组
					_this.$set(item, "active", true); //遍历所有状态，将状态设为全选状态
					_this.checkboxModel.push(item.goodId);
				});
				_this.allState = true;
			} else {
				this.goods.forEach(function(item, index) { //遍历data 里的 goods 数组
					_this.$set(item, "active", false); //遍历所有状态，将状态设为不选中状态
				});
				_this.allState = false;
				_this.checkboxModel = [];
			}
		},
		changebox(item, index) { //每个单选按钮点击事件
			let _this = this;
			if(item.active) { //如果点击过添加item 不存在属性 active 为false
				_this.$set(item, 'active', false); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。   
				_this.checkboxModel.splice(index, 1); //删除取消选中id出数组
				console.log(_this.checkboxModel)
			} else { //如果没有选中 ，为item添加 active属性为true
				_this.$set(item, 'active', true);
				_this.checkboxModel.push(item.goodId); //添加选中的商品id进数组
			}
			console.log(item.active);
		},

		//		===============
		changeMoney: function(item, type) {
			let _this = this;
			if(item.productQuantity){
				console.log('1')
				item.productQuantity = item.productQuantity++
				
			}else{
				console.log('2')
				_this.$set(item,'productQuantity',0);
				item.productQuantity = item.productQuantity++
			}
//			if(type < 0) {
//				item.productQuantity--;
//				if(item.productQuantity < 1) {
//					item.productQuantity = 1;
//				}
//			} else {
//				this.$set(item,'productQuantity');
//				item.productQuantity = productQuantity++
//			}

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