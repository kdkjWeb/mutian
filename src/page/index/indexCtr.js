export default {
	name: "index",
	data() {
		return {
			searchIpt:'',//搜索输入框
			activeIndex: 0,
			imgUrl: "static/images/bb.png",
			titList: [{
				typeName: "推荐"
			}, {
				typeName: "热销"
			}],


		}
	},
	methods: {

		//		======获取商品分类=========
		getlist() { 
			let _this = this;
			_this.$post('goodsType/getGoodsTypes', { //获取商品分类列表
			}).then(res => {
				let code = res.code;
				switch(code) {
					case 0:
						res.data.list.forEach(function(value, index, array) {
							_this.titList.push(value);
						})
						break;
				}
			})
		},
		
//		========
		linkTo(item,index){
			let typeId =  item.typeId;
			switch(index){
				case 0:
				this.$router.push({
					name:'recommend'
				});
				break;
				case 1:
				this.$router.push({
					name:'goodslist'
				});
				break;
				default:
				this.$router.push({
					name:'goodslist',
					query:{Id:typeId}
				});
				break;
			}
		},
		
		search(){
			this.$router.push({
				name:'search',
				query:{sText:this.searchIpt}
			})
		}
		
	},
	created() {
		window.scroll(0, 0);
		this.getlist(); //获取分类 
	}

}