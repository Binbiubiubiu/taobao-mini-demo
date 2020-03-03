const defaultOptions = {
  matchKey: "id",               //  匹配属性的key
  childrenKey: "children"       //  子属性的key
};

/**
 * @param tree 树形数据
 * @param matchValue 需要匹配属性的数值
 * @param ops 匹配属性
 */
 const findNodeInTree = (tree, matchValue, ops) => {
  if (!Array.isArray(tree) || tree.length == 0) {
    return null;
  }

  const { matchKey, childrenKey } = Object.assign(defaultOptions,ops);

  for (let i = 0; i < tree.length; i++) {
    const current = tree[i];
    if (current[matchKey] == matchValue) {
      return current;
    }

    const result = findNodeInTree(current.children, matchValue, ops);
    if (result) {
      return result;
    }
  }

  return null;
};

export default{
  findNodeInTree
}

