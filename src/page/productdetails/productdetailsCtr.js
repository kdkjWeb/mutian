export default{
    data(){
        return{
            goods: {
                price: '20.00',
                retailprice: '25.00',
                commission: '5',
                salesvolume: '1215',
                title: '自贡冷吃兔－香辣味200g',
                content: '嗨爆舌尖的美味，让佐料在你的唇齿间舞蹈。精选黔南辣椒和自贡特色兔肉，将辣椒的辣味一层层渗透进兔肉中，形成集辣、鲜、香、浓与一体的自贡冷吃兔',
                shipping: '包邮',
                numprice: '98'
            },
            serverList: [
                {
                    title: '闪电发货'
                },{
                    title: '真品包邮'
                },{
                    title: '急速物流'
                },{
                    title: '优质服务'
                }
            ],
            recommendedList: [
                {
                   url: 'static/images/c.png',
                   goodsName: '炽焰牛肉',
                   goodsWeight: '150',
                   goodsPrice: '34.00'
                },{
                    url: 'static/images/c1.png',
                    goodsName: '炽焰牛肉',
                    goodsWeight: '150',
                    goodsPrice: '34.00'
                 }
            ],
            discussList: [
                {
                    url: 'static/images/1.png',
                    userPhone: '13594987654',
                    content: '很好！很满意，物流也很快很好！很满意，物流也很快'
                }, {
                    url: 'static/images/1.png',
                    userPhone: '13594987654',
                    content: '很好！很满意，物流也很快'
                }, {
                    url: 'static/images/1.png',
                    userPhone: '13594987654',
                    content: '很好！很满意，物流也很快'
                }
            ],
            productdetailsList: [
                {
                    url: 'static/images/DSC_5578.png'
                },{
                    url: 'static/images/DSC_5578.png'
                },{
                    url: 'static/images/DSC_5578.png'
                },{
                    url: 'static/images/DSC_5578.png'
                }
            ]
        }
    }
}