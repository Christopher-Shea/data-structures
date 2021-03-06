const Queue = function() {
  let someInstance = {};

  someInstance.storage = {};
  someInstance.index = 0;

  someInstance.enqueue = function(value) {
    someInstance.index++;
    someInstance.storage[someInstance.index] = value;
  };

  someInstance.dequeue = function() {
    let popped = someInstance.storage[1];
    for (let i = 1; i < someInstance.index; i++) {
      someInstance.storage[i] = someInstance.storage[i + 1];
      delete someInstance.storage[i + 1];
    }
    someInstance.index = Math.max(someInstance.index - 1, 0);
    return popped;
  };

  someInstance.size = function() {
    return someInstance.index;
  };

  return someInstance;
};
