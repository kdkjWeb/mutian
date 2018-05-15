import { ECONNABORTED } from "constants";

export default {
		name: "index",
		data() {
			return {
				imgUrl: "static/images/bb.png",
				titList: [{
					text: "推荐"
				}, {
					text: "冷吃系列"
				}, {
					text: "休闲小吃"
				}, {
					text: "精品水果"
				}, {
					text: "礼盒礼包"
				}],
				 proList:[
			        {imgsrc:"static/images/u33.png",adname:"亲朋好友 首选礼盒亲朋好友 首选礼盒亲朋好友 首选礼盒",proname:"豆爱兔斯基大礼包 1147g",price:"105.00",oldprice:"24:00",id:1},
			        {imgsrc:"static/images/u2.jpg",adname:"亲朋好友 首选礼盒",proname:"豆爱兔斯基大礼包 1147g豆爱兔斯基大礼包 1147g",price:"102.00",oldprice:"2.00",id:2},
			        {imgsrc:"static/images/u4.jpg",adname:"亲朋好友 首选礼盒",proname:"豆爱兔斯基大礼包 1147g",price:"102.00",oldprice:"24.00",id:3},
			        {imgsrc:"static/images/u6.png",adname:"亲朋好友 首选礼盒",proname:"豆爱兔斯基大礼包 1147g",price:"1002.00",oldprice:"24.00",id:4},
			      ],
				killHour: 10,
				killMinute: 0,
				killSecond: 0
			}
		},
		methods: {
			//品牌故事、产品优势导航
			linkTo(index){
				switch(index){
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
			toDetails(){
				this.$router.push({
					name: 'productdetails'
				})
			}
		},
		created() {  
			window.scroll(0, 0);  
		}  
	
	}