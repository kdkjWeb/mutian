export default {
	data() {
		return {
			headTit:['全部','待付款','待发货','待收货','待评价'],
			headIndex:0,
			order:{}
		}
	},
	methods:{
		changeHead(index){
			this.headIndex = index;
//			swith(index){
//				
//			}
		}
	}
}