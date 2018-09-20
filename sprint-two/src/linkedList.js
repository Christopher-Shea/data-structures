const LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head) {
      let popped = list.head.value;
      list.head = (list.head.next) ? list.head.next : null;
      return popped;
    }
  };

  list.contains = function(target) {
    // MOST STRAIGHTFORWARD - WHILE LOOP
    let currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

    // USING A HELPER FUNCTION
    // let checkNext = function(nextNode) {
    //   if (nextNode.value === target) {
    //     return true;
    //   }
    //   if (nextNode.next) {
    //     return checkNext(nextNode.next)
    //   }
    //   return false;
    // }
    // return checkNext(list.head);

    // POSSIBLE DIRECT RECURSIVE CALL USING FUNCTION.CALL()?
    //let currentNode = (list.head) ? list.head : list; 
    // if (currentNode.next) {
    //   return list.contains.call(currentNode.next, target);
    // }
  //};

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail - O(1)
 removeHead - O(1)
 contains - O(n)
 */

 /*
 Wishlist: 
 addToHead
 removeFromTail
 Insert
 */
