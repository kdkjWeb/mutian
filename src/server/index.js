import Vue from 'vue'
import Axios from 'axios'

let axiosConfig = Axios.create({
    baseURL: 'http://192.168.20.3:8080/',   //后台接口的公用地址
    timeout: '10000',   //所有请求10s后过期
    withCredentials: true,    //是否允许跨域
});

export default axiosConfig;