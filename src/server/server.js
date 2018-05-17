import Axios from './index'

import Vue from 'vue'

/**
 * 公用的server 方法
 */


 export default{
     //get请求
     get:(url,data,load)=>{
     	if(!load || load == undefined){
            Vue.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
              });
        }
        return new Promise((resolve,reject)=>{
            Axios.get(url,{
                params: data
            }).then((res)=>{
	            
	             if(load || load == undefined) {
	                Vue.$indicator.close();
                  }
                  
                if(res.data.code == 0){
                    resolve(res.data)
                }else if(res.data.code == 500){
                    Vue.$toast({
                        message: res.data.msg,
                        duration: 2000
                    })
                }
            },err=>{
                if (load || load == undefined) {
                    Vue.$indicator.close();
                  }
                  
                if(res.data.nsg){
                    Vue.$toast({
                        message: res.data.msg,
                        duration: 2000
                    })
                }else{
                    Vue.$toast({
                        message: '网络好像出错了',
                        duration: 2000
                    })
                }
                
            }).catch((err)=>{
                if (load || load == undefined) {
                    Vue.$indicator.close();
                  }

                Vue.$toast({
                    message: '网络好像出错了',
                    duration: 2000
                })
                reject(err)
            })
        })
    },


    //post请求	
    post: (url,data,load)=>{

        if(!load || load == undefined){
            Vue.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
              });
        }

        return new Promise((resolve,reject)=>{
            Axios.post(url,data)
            .then((res)=>{
                if (load || load == undefined) {
                    Vue.$indicator.close();
                  }

                if(res.data.code == 0){
                    resolve(res.data)
                }else if(res.data.code == 500){
                    Vue.$toast({
                        message: res.data.msg,
                        duration: 2000
                    })
                }
                
            },err=>{
                if (load || load == undefined) {
                    Vue.$indicator.close();
                  }

                if(res.data.nsg){
                    Vue.$toast({
                        message: res.data.msg,
                        duration: 2000
                    })
                }else{
                    Vue.$toast({
                        message: '网络好像出错了',
                        duration: 2000
                    })
                }

            }).catch((err)=>{
                if (load || load == undefined) {
                    Vue.$indicator.close();
                  }
                  
                Vue.$toast({
                    message: '网络好像出错了',
                    duration: 2000
                })
                reject(err)
            })
        })
    }
 }