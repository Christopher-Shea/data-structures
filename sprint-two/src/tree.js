const Tree = function(value) {
  let newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (let child of this.children) {
    if (child.contains(target) === true) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1)
 * contains - O(n)
 */
