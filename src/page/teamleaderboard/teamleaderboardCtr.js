export default{
    data(){
        return{
            activeIndex: 0,
            cardTitlt: [
                {
                    title: '个人销量'
                },{
                    title: '个人收入'
                },{
                    title: '团队销量'
                },
            ],
            leaderboardList: [
               {
                   src: 'static/images/1.png',
                   userName: '扯淡',
                   userPhone: '18778934567',
                   userNum: '500',
                   userRanking: '1',
                   userMoney: '5009.89'
               },{
                    src: 'static/images/1.png',
                    userName: '扯淡',
                    userPhone: '18778934567',
                    userNum: '500',
                    userRanking: '2',
                    userMoney: '5009.89'
                },{
                    src: 'static/images/1.png',
                    userName: '扯淡',
                    userPhone: '18778934567',
                    userNum: '500',
                    userRanking: '3',
                    userMoney: '5009.89'
                },{
                    src: 'static/images/1.png',
                    userName: '扯淡',
                    userPhone: '18778934567',
                    userNum: '500',
                    userRanking: '4',
                    userMoney: '5009.89'
                },{
                    src: 'static/images/1.png',
                    userName: '扯淡',
                    userPhone: '18778934567',
                    userNum: '500',
                    userRanking: '5',
                    userMoney: '5009.89'
                },{
                    src: 'static/images/1.png',
                    userName: '扯淡',
                    userPhone: '18778934567',
                    userNum: '500',
                    userRanking: '6',
                    userMoney: '5009.89'
                }
            ]
        }
    },
    methods: {
        changeCard(index){
            this.activeIndex = index;
        }
    }
}