const getChildrenCheckedAction = (source,path)=>{

  let actions = {}
  for(let i = 0;i<source.length;i++){
    const current = source[i];
    actions[`${path}[${i}].checked`] = true;

    if(current.children && current.children.length>0){
      actions = Object.assign(actions,getChildrenCheckedAction(current.children,`${path}[${i}].children`))
    }
  }

  return actions;
}

Component({
  mixins: [],
  data: {},
  props: {
    id: "",
    label: "",
    checked: false,
    indeterminate: false,
    content: [],
    depth: 0,
    path: "",
    onChange: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleChange(actions) {
      const { path, content } = this.props;
      const isAllChecked = content && content.every(item => item.checked);
      actions[`treeData${path}.checked`] = isAllChecked;
      actions[`treeData${path}.indeterminate`] = !isAllChecked;

      getChildrenCheckedAction

      this.props.onChange(actions);
    },
    handleTreeSelect(e) {
      const { path } = this.props;

      this.props.onChange({
        [`treeData${path}.checked`]: true
      });
    }
  }
});
