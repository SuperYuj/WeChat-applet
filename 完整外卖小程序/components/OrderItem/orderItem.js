// components/OrderItem/orderItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     id:{
       type:Number,
       value:0
     },
     picture:{
       type:String,
       value:''
     },
     product:{
       type:String,
       value:''
     },
     shop:{
       type:String,
       value:''
     },
     price: {
       type: String,
       value:''
     },
     ifCommented:{
       type:Boolean,
       value:false
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      /*
       * 内部私有方法建议以下划线开头
       * triggerEvent 用于触发事件
       */
      _addCartEvent() {
        //触发取消回调
        this.triggerEvent("addCartEvent")
      },
  }
})
