//import { ECONNABORTED } from "constants";

export default {
	data() {
		return {
			myurl: '', //img 公用地址
			userType:'1',  //用户等级
			HotList:[],  //今日推荐
			proList: [],  //产品推荐
			killHour: 10,
			killMinute: 0,
			killSecond: 0
		}
	},
	methods: {
		//品牌故事、产品优势导航
		linkTo(index) {
			switch(index) {
				case 0:
					this.$router.push({
						name: 'story'
					})
					break;
				case 1:
					this.$router.push({
						name: 'productadvantages'
					})
					break;
				case 2:
					this.$router.push({
						name: 'rushtobuy'
					})
					break;
				case 3:
					console.log('新人福利')
					this.$router.push({
						name: 'newwelfare'
					})
					break;
				case 4:
					this.$router.push({
						name: 'purchasenotes'
					})
					break;
			}
		},
		
//		======跳转详情页面========
		toDetails(id) {
			console.log(id)
			this.$router.push({
				name: 'productdetails',
				query:{goodsId:id}
			})
		},
//		========获取今日推荐============
		getHotList(){

			let _this = this;
			_this.$get('goods/getHotGoods', { 
				pageSize:3
			}).then(res => {
				let code = res.code;
				switch(code) {
					case 0:
						res.data.list.forEach(function(value,index,array){
							_this.HotList.push(value);
						})
					break;	
				}
			})
		},
		
//		======获取产品推荐=========
		
		getGoodsList(){
			let _this = this;
			_this.$post('goods/getRandomList', {
				
			}).then(res => {
				let code = res.code;
				switch(code) {
					case 0:
					_this.proList = res.data.list;
					break;	
				}
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
		
//		===========
		
	
	},
	created() {
		window.scroll(0, 0);
		this.getHotList();
		this.getGoodsList();
		
		this.myurl = this.$common.imgUrl();  //获取图片地址公用
	}

}