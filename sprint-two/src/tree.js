const Tree = function(value) {
  let newTree = {};

  newTree.parent = null;
  newTree.value = value;
  newTree.children = {};

  _.extend(newTree, treeMethods);

  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  newTree.parent = this;
  this.children[value] = newTree;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (let child in this.children) {
    if (this.children[child].contains(target) === true) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  delete this.parent.children[this.value];
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this);
  for (let child in this.children) {
    this.children[child].traverse(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1)
 * contains - O(n)
 * removeFromParent - O(1)
 * traverse - O(n)
 */
