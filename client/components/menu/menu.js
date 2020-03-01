Component({
  mixins: [],
  data: {},
  props: {
    active:{},
    dataSource:[
      // {
      //   name:"菜单标题",
      //   path:"路由路径",
      //   icon:"图标",
      //   subTitle:"小标题"
      // }
    ],
    onChange:()=>{}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleMenuItemTap(event) {
      let { menu } = event.target.dataset;
      const {onChange} = this.props;

      onChange(menu)
    },
  },
});
