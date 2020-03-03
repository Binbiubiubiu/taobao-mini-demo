import {mergeTree} from './utils';
import mockData from './mock';

Component({
  mixins: [],
  data: {
    treeData:[]
  },
  props: {
    dataSource:mockData,
    checkedList:[18]
  },
  didMount() {
    const {dataSource,checkedList} = this.props;
    this.setData({
      treeData:mergeTree(dataSource,checkedList)
    })
  
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleCLick(actions){
      // console.log(actions)
      this.setData(actions)
    }
  },
});
