// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const product = wx.getStorageSync('product');
    console.log(product);
    this.setData({
      product
    });
    this.addAmountPlus();
  },

  // 商品详情页到购物车
  toNavCart() {
    wx.navigateBack();
    wx.switchTab({
      url: '../cart/cart'
    })
  },

  addCartClick() {
    var cartItems = wx.getStorageSync("cartItems") || []
    const item = this.data.product;
    let products = cartItems.filter(el => el.id === item.id);
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
      this.addAmountPlus();
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 1000
      })
    } catch (e) {
      console.error("加入购物车出错 " + e);
    }
  },
  addAmountPlus() {
    var cartItems = wx.getStorageSync("cartItems") || []
    var amount = 0
    cartItems.forEach(function (entry) {
      amount += entry.quantity * entry.product['member-price']
    })
    this.setData({
      amount: amount
    })
  }

})