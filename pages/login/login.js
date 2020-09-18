Page({
	data: {
		//判断小程序的API，回调，参数，组件等是否在当前版本可用。
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true,
    lee: "",
    flag: true
	},
	onLoad: function() {
		var that = this;
		// 查看是否授权
		wx.getSetting({
			success: function(res) {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: function(res) {
							//从数据库获取用户信息
              getApp().globalData.userInfo = res.userInfo;
              // 登录
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  getApp().globalData.code = res.code;
                  console.log(getApp().globalData.code);
                  that.queryUsreInfo();
                }
              })
						
							//用户已经授权过
							// wx.switchTab({
							// 	url: '../index/index'
							// })
						}
					});
				}else{
          that.setData({
            isHide: true
          });
        }
			}
    }) 
    wx.request({
      url: getApp().globalData.logo,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        
        that.setData({
          logo:res.data.data.path,
        })

     wx.setStorageSync('logo', res.data.data.path)

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

	},
	bindGetUserInfo: function(e) {
		if (e.detail.userInfo) {
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          getApp().globalData.code = res.code;
          //用户按了允许授权按钮
          console.log(e.detail.userInfo);
          console.log(getApp().globalData.code);
          var that = this;
          //插入登录的用户的相关信息到数据库s
          wx.request({
            url: getApp().globalData.wx_login,
            data: {
              code: getApp().globalData.code,
              userInfo : e.detail.userInfo,
              nickname: e.detail.userInfo.nickName,
              user_sex: e.detail.userInfo.gender,
              user_avatar: e.detail.userInfo.avatarUrl,
              province: e.detail.userInfo.province,
              city: e.detail.userInfo.city
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              //返回用户openid
              console.log(res);
              //console.log(res.data.data.openid); 
             wx.setStorageSync('openid', res.data.data.openid)
             wx.setStorageSync('u_id', res.data.data.u_id)
       
              wx.navigateTo({
                url: '/pages/liuyan/liuyan',
              })
              return;
              //从数据库获取用户信息
              getApp().globalData.openid = res.data.returnData.openid;
              getApp().globalData.session_key = res.data.returnData.session_key;
              if (that.data.lee == '') {
                wx.showToast({
                  icon: "none",
                  title: '请继续点击获取手机号',
                }),
                  that.setData({
                    isHide: true,
                    flag: (!that.data.flag),
                    lee: true
                  })
              } else if (!that.data.lee) {
                wx.switchTab({
                  url: "../index/index"
                })

              }
              // that.queryUsreInfo();
              console.log("插入小程序登录用户信息成功！");
            }
          });

        }
      })

			
		} else {
			//用户按了拒绝按钮
			wx.showModal({
				title: '警告',
				content: '您点击了拒绝授权，将无法查看订单页面，请授权之后再进入订单页面!!!',
				showCancel: false,
				confirmText: '返回授权',
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击了“返回授权”')
					}
				}
			})
		}
	},
	//获取用户信息接口
	queryUsreInfo: function() {
		wx.request({
      url: getApp().globalData.get_user_info,
			data: {
        code: getApp().globalData.code,
				openid: getApp().globalData.openid
			},
      method:'POST',
			header: {
				'content-type': 'application/json'
			},
			success: function(res) {
        console.log(res.data.userInfo);
        wx.setStorageSync('userInfo', res.data.userInfo);
        wx.reLaunch({
								url: '../index/index'
							})
			}
		})
	},
  getPhoneNumber: function (e) { //点击获取手机号码按钮
    var that = this;
    that.data.lee
    if (that.data.lee == '') {
      wx.showToast({
        icon: "none",
        title: '请先点击获取用户信息',
      })
      return
    } else {
      wx.checkSession({
        success: function (res) {
          console.log(e.detail.errMsg)
          console.log(e.detail.iv)
          console.log(e.detail.encryptedData)
          var ency = e.detail.encryptedData;
          var iv = e.detail.iv;
          var sessionk = getApp().globalData.session_key;
          if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
            wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，部分功能无法使用!!!',
              showCancel: false,
              confirmText: '返回授权',
              success: function (res) {
                // 用户没有授权成功，不需要改变 isHide 的值
                 that.setData({
                    lee: false,
                  });
                if (res.confirm) {
                  
                  console.log('用户点击了“返回授权”');
                };
              }
            })
          } else {
            wx.request({
              url: getApp().globalData.set_user_phone,
              data: {
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                sessionKey: getApp().globalData.session_key,
                openid: getApp().globalData.openid
              },
              method:'POST',
              success: function (res) {
                console.log(res);
                that.setData({
                    lee: true,
                  });
                that.queryUsreInfo();
              },
              fail: function (res) {
                console.log('fail' + res);
              }
            });
          }
        },

        fail: function () {

          console.log("session_key 已经失效，需要重新执行登录流程");


        }

      });
    }

  },
    /**
   * 获取用户信息,授权
   */
  getUserInfo(e) {
    this.setData({
      loading: true,
      disabled: true
    })
    if (e.detail.encryptedData) {
      wx.login({
        success: login_res => {
          if (login_res.code) {
            wx.getUserInfo({
              success: info_res => {
                this.wx_login(login_res.code, info_res)
              }
            })
          } else {
            this.setData({
              loading: false,
              disabled: false
            })
            wx.showToast({
              title: '登录失败',
              icon: 'none'
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '授权失败',
        icon: 'none'
      })
      this.setData({
        loading: false,
        disabled: false
      })
    }
  },
  wx_login(code,info_res){
    wx.request({
      url: getApp().globalData.wx_login,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     data:{code:code,            
           nickName: info_res.userInfo.nickName,
           avatarUrl: info_res.userInfo.avatarUrl,
      },
      success: function(res){
         //console.log(res.data.data); 
        // //  that.setData({
        // //   result: res.data.data,
        // //  })
        //if(res.data.code=='RESULT_SUCCESS'){
              wx.setStorageSync('openid', res.data.data.openid)
              wx.navigateTo({
                url: 'pages/liuyan/liuyan',
              })
        //}
       
      }
  })
  }

})
