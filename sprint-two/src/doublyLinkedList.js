const DoublyLinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    let newNode = Node(value);
    if (!list.tail) {
      list.tail = newNode;
    }
    if (list.head) {
      newNode.next = list.head;
    }
    list.head = newNode;
  };

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
      if (list.head.next === null) {
        list.tail = null;
      }
      list.head = (list.head.next) ? list.head.next : null;
      return popped;
    }
  };

  list.removeTail = function() {
    // if (list.head) {
    //   let popped = list.head.value;
    //   if (list.head.next === null) {
    //     list.tail = null;
    //   }
    //   list.head = (list.head.next) ? list.head.next : null;
    //   return popped;
    // }
  };

  list.insert = function(parentValue, value) {
    let newNode = Node(value);
    let parentNode = list.head;
    while (parentNode.value !== parentValue) {
      if (parentNode.next === null) {
        return null;
      }
      parentNode = parentNode.next;
    }
    newNode.next = parentNode.next;
    parentNode.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail - O(1)
 removeHead - O(1)
 contains - O(n)
 addToHead - O(1)
 insert - O(n)
*/