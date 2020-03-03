const node = {
  id: "",
  label: "",
  checked: false,
  indeterminate: false,
  parent: {},
  content: []
};

const mergeTreeWithCheckList = (source, checkedList, parent = null) => {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    let current = source[i];
    let isChecked = checkedList.indexOf(current.id) != -1;

    const item = {
      id: current.id,
      label: current.label,
      checked: isChecked,
      indeterminate: false,
      parent: parent
    };

    item.children =
      current.children && current.children.length > 0
        ? mergeTreeWithCheckList(current.children, checkedList, item)
        : [];

    result.push(item);
  }

  return result;
};

const checkedAllChild= (source)=>{
  for (let i = 0; i < source.children.length; i++) {
    const current = source.children[i];
    current.checked=true;
    if(current.children && current.children.length!=0){
      checkedAllChild(current)
    }
  }
}

const checkParentIsChecked = source => {

  for (let i = 0; i < source.length; i++) {
    let current = source[i];

    if (current.checked) {
      let temp = current.parent;
      while (temp) {
        let arr = temp.children || [];
        temp.checked = arr.length != 0 && arr.every(item => item.checked);
        if (!temp.checked) {
          temp.indeterminate = arr.some(item => item.checked);
        }
        temp = temp.parent;
      }

      checkedAllChild(current)
    }

    current.children =
      current.children && current.children.length > 0
        ? checkParentIsChecked(current.children)
        : [];
  }
  return source;
};

const pureTree = source => {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    let {parent,...rest} = source[i];

    rest.children =
      rest.children && rest.children.length > 0
        ? pureTree(rest.children)
        : [];

    result.push(rest);
  }

  return result;
};

export const mergeTree = (source, checkedList) =>
  [checkParentIsChecked, pureTree].reduce(
    (r, m) => m(r),
    mergeTreeWithCheckList(source, checkedList)
  );

