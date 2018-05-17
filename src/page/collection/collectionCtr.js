export default {
	data() {
		return {
			goodsList: [{
					imgsrc: "static/images/u33.png",
					adname: "芋儿鸡",
					price: "105.00",
					oldprice: "24:00",
					id: 1,
					stock: true
				},
				{
					imgsrc: "static/images/u2.jpg",
					adname: "小龙虾",
					price: "102.00",
					oldprice: "2.00",
					id: 2,
					stock: true
				},
				{
					imgsrc: "static/images/u4.jpg",
					adname: "冷吃兔",
					price: "102.00",
					oldprice: "24.00",
					id: 3,
					stock: false
				},
				{
					imgsrc: "static/images/u6.png",
					adname: "麻辣鸡",
					price: "1002.00",
					oldprice: "24.00",
					id: 4,
					stock: true
				},
			],
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
		change: function() {   //编辑状态改变
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

		changeActive: function(item, index) {   // 选中按钮点击
			let _this = this;
			if(item.isActive) {
				item.isActive = false;
				_this.checkboxModel.splice(0, 1); 
			} else {
				item.isActive = true;
				_this.checkboxModel.push('');
			}
		},
		
		allDo:function(){
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
		}
		
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