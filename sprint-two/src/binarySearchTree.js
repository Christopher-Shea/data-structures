const BinarySearchTree = function(value) {
  let newBST = {};

  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  _.extend(newBST, binaryTreeMethods);

  return newBST;
};

const binaryTreeMethods = {};

// will create the newNode again every time a recursive call is made
// binaryTreeMethods.insert = function(value) {
//   let newNode = BinarySearchTree(value);
//   if (this.value === value) {
//     return;
//   }
//   if (newNode.value < this.value) {
//     if (!this.left) {
//       this.left = newNode;
//     } else {
//       this.left.insert(value);
//     }
//   } else {
//     if (!this.right) {
//       this.right = newNode;
//     } else {
//       this.right.insert(value);
//     }
//   }
// };

// Adjust .insert to accept a node
binaryTreeMethods.insert = function(value) {
  value = (typeof value === 'object') ? value : BinarySearchTree(value);
    
  if (this.value === value) {
    return;
  }
  if (value.value < this.value) {
    if (!this.left) {
      this.left = value;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = value;
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    }
    return this.right.contains(value);
  }
};


binaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(log n)
 * contains - O(log n)
 * dFL - O(n)
 */
