import routerConfig from './router';
import routerInit from 'miniapp-router';

import mockData from './data'

const app = getApp();

Page({
  data: {
    app:app.globalData.app,
    userInfo: {name:"Simon-Bin"}, //app.globalData.userInfo ||
    menuData:mockData,
    activeMenu:mockData[0],
    
  },
  onLoad() {
    routerInit.call(this, routerConfig);
  },
  onItemClick(menu) {
   
    this.setData({ activeMenu:menu });

    this.$router.push(`${menu.path}`);
    console.log('[router test]：', menu.path);
  },
  handleSelect(value) {},
});
