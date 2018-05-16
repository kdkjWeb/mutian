import Axios from './index'



/**
 * 公用的server 方法
 */


 export default{
     //get请求
     get:(url,data)=>{
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
        return new Promise((resolve,reject)=>{
            Axios.get(url,{
                params: data
            }).then((res)=>{
                if(load || load == undefined){
                    Indicator.close();
                }
                resolve(res.data)
            }).catch((err)=>{
                if(load || load == undefined){
                    Indicator.close();
                }
                if(err.data.msg){
                    this.$toast(res?res.data.msg:"操作失败")
                }else{
                    this.$toast(res?res.data.msg:"服务器异常")
                }
                reject(err)
            })
        })
    },


    //post请求	
    post: (url,data,load)=>{
        if(load || load == undefined){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
              });
        }
        return new Promise((resolve,reject)=>{
            Axios.post(url,data)
            .then((res)=>{
                if(load || load == undefined){
                    Indicator.close();
                }
                resolve(res.data)
            }).catch((err)=>{
                if(load || load == undefined){
                    Indicator.close();
                }
                if(err.data.msg){
                    this.$toast(res?res.data.msg:"操作失败")
                }else{
                    this.$toast(res?res.data.msg:"服务器异常")
                }
                reject(err)
            })
        })
    }
 }