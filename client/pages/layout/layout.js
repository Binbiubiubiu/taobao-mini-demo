import routerConfig from './router';
import routerInit from 'miniapp-router';

import mockData from './data'

const app = getApp();

Page({
  data: {
    app:app.globalData.app,
    menuData:mockData,
    activeMenu:mockData[0],
    
  },
  onLoad() {
    routerInit.call(this, routerConfig);
  },
  onItemClick(event) {
    let { menu } = event.target.dataset;
   
    this.setData({ activeMenu:menu });

    this.$router.push(`${menu.path}`);
    console.log('[router test]：', menu.path);
  },
  handleSelect(value) {},
});
