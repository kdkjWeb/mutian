export default {
	data() {
		return {
			goodsList: [{
					imgsrc: "static/images/u33.png",
					adname: "芋儿鸡",
					price: "105.00",
					oldprice: "24:00",
					id: 1
				},
				{
					imgsrc: "static/images/u2.jpg",
					adname: "小龙虾",
					price: "102.00",
					oldprice: "2.00",
					id: 2
				},
				{
					imgsrc: "static/images/u4.jpg",
					adname: "冷吃兔",
					price: "102.00",
					oldprice: "24.00",
					id: 3
				},
				{
					imgsrc: "static/images/u6.png",
					adname: "麻辣鸡",
					price: "1002.00",
					oldprice: "24.00",
					id: 4
				},
			],
			isShow:false   //是否是编辑状态
			
		}
	},
	methods: {
		change:function () {
			
			let Show = this.isShow;
			
			switch(Show){
					case false:
					this.isShow = true;
				break;
					case true:
					this.isShow = false	;
				break;
			}

			
			
			
      }
		
	}
}