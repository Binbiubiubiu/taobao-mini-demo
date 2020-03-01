const app = getApp();

Page({
  data: {},
  onLoad() {
    app.auth()
      .then((res)=>{
        setTimeout(()=>{
my.alert({content:JSON.stringify(res)})
        },100)
        

        // my.redirectTo({
        //   url: "/pages/layout/layout"
        // });
      })
  },
});
