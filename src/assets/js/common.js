import Vue from 'vue'

//import router from './../../router'

export default {

	//	===========返回上一页
	goBank: (num) => {
		console.log(num);
	},
	
//	=========减法精确计算===========
	Subtr:(arg1, arg2)=>{
		var r1, r2, m, n;
		try {
			r1 = arg1.toString().split(".")[1].length;
		} catch(e) {
			r1 = 0;
		}
		try {
			r2 = arg2.toString().split(".")[1].length;
		} catch(e) {
			r2 = 0;
		}
		m = Math.pow(10, Math.max(r1, r2));
		//last modify by deeka
		//动态控制精度长度
		n = (r1 >= r2) ? r1 : r2;
		return((arg1 * m - arg2 * m) / m).toFixed(n);
	},
//	===============图片地址
	imgUrl:()=>{
		var url = 'http://192.168.20.3:8080';
		return url
	}
	
}