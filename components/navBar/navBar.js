// components/navBar/navBar.js
const app = getApp();
//初始化数据
function tabbarinit(bindName = "tabdata", id, that) {
  // wx.hideTabBar({})

  let otabbar = [{
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
    ],
    bindData = {}
  for (let i of otabbar) {
    // i.iconPath = Base64.encode(i.iconPath)
    // i.selectedIconPath = Base64.encode(i.selectedIconPath.split('#7f7f7f').join('red'))
  }
  //换当前的icon
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']
  // otabbar[id]['img'] = otabbar[id]['st_img']
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({
    bindData
  })
}

module.exports = {
  tabbar: tabbarinit
}

