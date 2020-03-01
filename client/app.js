import cloud from '@tbmp/mp-cloud-sdk';

const globalData = {
  app: {
    title: "小程序demo",
    subTitle: "由 Simon-Bin 提供",
    logo: "/assets/logo.png",
  },
  userInfo: {}
};

//初始化云函数
cloud.init({
  env: 'test', // test online
});

App({
  cloud,
  globalData,
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info("App onLaunch");
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  /**
   * 调用云函数的封装
   * @param namespace 云函数的名称
   * @param data 传入的参数
   * @param handler 指定云函数的handler 默认为 "main"
   */
  request(namespace, data, handler = "main") {
    my.showLoading();
    return cloud.function.invoke(namespace, data, handler)
      .then(res => {
        my.hideLoading();
        const code = Number(res.code);
        if (code == 200) {
          return res;
        } else {
          setTimeout(() => {
            my.showToast({
              content: res.message || '系统异常'
            })
          }, 100)
          return Promise.reject(res)
        }
      }).catch(err => {
        setTimeout(() => {
          my.showToast({
            content: JSON.stringify(err)
          })
        }, 100)
        my.hideLoading();
        return Promise.reject(err);
      })
  },
  /**
   * 授权获取用户信息
   */
  auth() {
    return new Promise((resolve, reject) => {
      my.authorize({
        force: true,
        scopes: '*',
        success: (res) => {
          my.getAuthUserInfo({
            success: (userInfo) => {
              
              globalData.userInfo = userInfo

              resolve(userInfo);
            },
            fail:(err)=>{
              reject(err)
            }
          });
        },
        fail: (err) => {
          console.log(err)
           reject(err)
        }
      });
    })

  },
});
