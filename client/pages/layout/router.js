export default {
  routes: [
    {
      path: "/button",
      component: "button",
      meta:{
        name:"Button",
        subTitle: "按钮",
        icon:""
      }
    },
    {
      path: "/progress",
      component: "progress",
      meta:{
        name:"Progress",
        subTitle: "进度条",
        icon:""
      }
    },
    {
      path: "/tree",
      component: "tree",
      meta:{
        name:"Tree",
        subTitle: "树形选择",
        icon:""
      }
    }
  ],
  option: {
    initPath: "/tree"
  }
};
