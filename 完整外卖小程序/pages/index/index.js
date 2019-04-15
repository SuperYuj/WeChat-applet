//index.js

Page({
    data: {
        imgUrls: [
            'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=720',
            'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=720',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=720'
            // '../../img/tooopen_sy_143912755726.jpg',
            // '../../img/timg.jpg',
            // '../../img/tooopen_sy_143912755726.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    onDetailClick(e) {
        const index = e.currentTarget.dataset.id;
        const listData = [...this.data.list];
        const item = listData.find(function (x) {
            return x.id === index;
        })
        wx.setStorageSync('product', item);
        wx.navigateTo({
            url: '../../pages/detail/detail'
        })
    },
    addCartEvent(e) {
        var cartItems = wx.getStorageSync("cartItems") || []
        const index = e.currentTarget.dataset.id;
        const listData = [...this.data.list];
        // 获取点击项对应数据
        const item = listData.find(function (x) {
            return x.id === index;
        })

        let products = cartItems.filter(el => el.id === item.id);
        // 判断商品在购物车是否存在;如果存在数量加一，否则添加到购物车
        if (products != null && products.length > 0) {
            products[0].quantity += 1;
        } else {
            const cartItem = {
                id: item.id,
                product: {
                    "image-url": item.picture,
                    "name": item.shop,
                    "baye-price": item.price,
                    "member-price": item.price - 5
                },
                quantity: 1
            }
            cartItems.push(cartItem);
        }

        try {
            wx.setStorageSync('cartItems', cartItems)
            wx.showToast({
                title: '加入购物车成功',
                icon: 'success',
                duration: 1000
            })
        } catch (e) {
            console.error("加入购物车出错 " + e);
        }
    },
    onLoad() {
        var that = this;
        // wx.request({
        //     url: 'http://192.168.35.114/order/orders.json',
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     method: 'GET',
        //     success: (result) => {
        //         that.setData({
        //             list: result.data
        //         });
        //     }
        // });
        this.setData({
            list: listData
        });
    },
    // 下拉刷新事件
    onPullDownRefresh() {
        wx.showNavigationBarLoading(); // 导航栏加载效果
        var that = this;
        // wx.request({
        //     url: 'http://192.168.35.114/order/orders.json',
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     method: 'GET',
        //     success: (result) => {
        //         setTimeout(() => {
        //             that.setData({
        //                 list: result.data
        //             });
        //             // 隐藏导航栏加载
        //             wx.hideNavigationBarLoading();
        //             // 停止下拉刷新
        //             wx.stopPullDownRefresh();
        //         }, 2000);
        //     }
        // });

        setTimeout(() => {
            that.setData({
                list: listData
            });
            // 隐藏导航栏加载
            wx.hideNavigationBarLoading();
            // 停止下拉刷新
            wx.stopPullDownRefresh();
        }, 2000);
    },
    // 上拉加载更多
    onReachBottom() {
        wx.showLoading({
            title: '加载中',
        })

        // page =  page + 1;
        // var that = this;
        // wx.request({
        //     url: 'http://192.168.35.114/order/orders.json',
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     method: 'GET',
        //     success: (result) => {
        //         setTimeout(() => {
        //             const tempList = result.data; // 上拉加载更多获取的最新数据
        //             tempList.forEach(element => {
        //                 console.log(element.id + element.product);
        //             });
        //             const listData = [...that.data.list, ...tempList]; // es6 将最新数据合并到list数组
        //             console.log('====================');
        //             listData.map((item) => {
        //                 console.log(item.id + item.product);
        //             });

        //             that.setData({
        //                 list: listData
        //             });

        //             // 停止上拉刷新
        //             wx.hideLoading()
        //         }, 2000);


        //     }
        // });

        setTimeout(() => {
            const tempList = listData; // 上拉加载更多获取的最新数据
            //  tempList.forEach(element => {
            //      console.log(element.id + element.product);
            //  });
            const listDatas = [...this.data.list, ...tempList]; // es6 将最新数据合并到list数组
            //  console.log('====================');
            //  listData.map((item) => {
            //      console.log(item.id + item.product);
            //  });

            this.setData({
                list: listDatas
            });

            // 停止上拉刷新 
            wx.hideLoading()
        }, 2000);

    }
})

const listData = [{
        "id": 1,
        "shop": "张姐烤肉饭脆皮饭",
        "picture": "https://fuss10.elemecdn.com/0/85/8c35871b76aee22028071ab5f946ejpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
        "product": "黑椒脆皮鸡+时蔬+米饭",
        "price": "18",
        "ifCommented": false
    },
    {
        "id": 2,
        "shop": "和风食堂(万达店)",
        "picture": "https://fuss10.elemecdn.com/8/38/64d61e8602fa655ae5e91e782a014jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "product": "照烧猪排饭套餐",
        "price": "25",
        "ifCommented": false
    },
    {
        "id": 3,
        "shop": "三个先森的韩国炸鸡(茶南店)",
        "picture": "https://fuss10.elemecdn.com/8/23/95c7071dab35af98d4d98330e2addjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "product": "辣味往事炸鸡中份",
        "price": "27",
        "ifCommented": true
    },
    {
        "id": 4,
        "shop": "必胜客宅急送（南京南湖店）",
        "picture": "https://fuss10.elemecdn.com/a/05/a080fb38089da473d9c1738047a69jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "product": "超级至尊比萨S[芝心]",
        "price": "94",
        "ifCommented": false
    },
    {
        "id": 6,
        "shop": "陈记状元拌面（集庆门大街店）",
        "picture": "https://fuss10.elemecdn.com/b/10/2803c97d60ce45c490c773e064ca8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "product": "黑椒牛肉状元面",
        "price": "38",
        "ifCommented": true
    },
    {
        "id": 7,
        "shop": "丽塔丝烤猪蹄（狮子桥）",
        "picture": "https://fuss10.elemecdn.com/7/9a/203d94b035b3e2fa6b0f13aba5964jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "product": "招牌烤猪蹄",
        "price": "25",
        "ifCommented": false
    },
    {
        "id": 8,
        "shop": "老妈烫饭(新街口店)",
        "picture": "https://fuss10.elemecdn.com/e/82/c98fec55c30021b85ab608718b66ajpeg.jpeg?imageMogr/format/webp/thumbnail/240x/",
        "product": "酸菜肥牛烫饭",
        "price": "35",
        "ifCommented": true
    },
    {
        "id": 9,
        "shop": "潘记粥铺",
        "picture": "https://fuss10.elemecdn.com/4/de/77ac131935dc594db4b658b8c3d23jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/",
        "product": "皮蛋鸡丝粥",
        "price": "16",
        "ifCommented": true
    },
    {
        "id": 10,
        "shop": "七星椒菜馆",
        "picture": "https://fuss10.elemecdn.com/0/73/64ed45043082e410abad6f18ce0aajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
        "product": "酸菜鱼",
        "price": "28",
        "ifCommented": false
    }

]