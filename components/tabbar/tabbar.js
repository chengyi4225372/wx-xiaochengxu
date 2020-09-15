// components/tabbar/tabbar.js
Component({
  properties: {
    active: { //选中的下标
      type: null,
      observer: function (newVal, oldVal) {

        if (newVal != '') {
          this.setData({
            selected: newVal
          })
        }
      }
    }
  },
  data: {
      selected: 0,
      color: "#666666",
      selectedColor: "#f12928",
      list: [{
        pagePath: "/pages/index/index",
        iconPath: "/images/nav1.png",
        selectedIconPath: "/images/nav1_active.png",
        text: "前言"
      },
      {
        pagePath: "/pages/overview/overview",
        iconPath: "/images/nav2.png",
        selectedIconPath: "/images/nav2_active.png",
        text: "综述"
      },
      {
        pagePath: "/pages/practice/practice",
        iconPath: "/images/nav3.png",
        selectedIconPath: "/images/nav3_active.png",
        text: "探索实践"
      },
      {
        pagePath: "/pages/product/product",
        iconPath: "/images/nav4.png",
        selectedIconPath: "/images/nav4_active.png",
        text: "项目精选"
      },
      {
        pagePath: "/pages/deed/deed",
        iconPath: "/images/nav5.png",
        selectedIconPath: "/images/nav5_active.png",
        text: "事迹风采"
      },
      {
        pagePath: "/pages/epilogue/epilogue",
        iconPath: "/images/nav6.png",
        selectedIconPath: "/images/nav6_active.png",
        text: "结语与留言"
      }
      ]
    
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.redirectTo({
        url: url
      })
      this.setData({
        selected: data.index
      })
      //回调函数
      this.triggerEvent('tapChange', data.index);
    }
  }
  
})