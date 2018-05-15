export default{
    data(){
        return{
            mineOrder: [
                {
                   title: '待付款',
                   icon: 'icon-yinhangqia4'
                },{
                    title: '待发货',
                    icon: 'icon-daifahuo2'
                 },{
                    title: '待收货',
                    icon: 'icon-daishouhuo2'
                 },{
                    title: '待评价',
                    icon: 'icon-wujiaoxing'
                 },{
                    title: '退款/售后',
                    icon: 'icon-ccgl-tuihuoyugao-7'
                 },
            ]
        }
    },
    methods: {
        //点击退出登录按钮
        loginOut(){
            this.$router.push({
                name: 'login'
            })
        },
        //点击头像查看详细的个人信息
        personalCenter(){
            this.$router.push({
                name: 'personal'
            })
        }
    },
    created() {  
        window.scroll(0, 0);  
    } 
}