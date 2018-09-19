const Stack = function() {
  let someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.index++;
    someInstance.storage[someInstance.index] = value;
  };

  someInstance.pop = function() {
    let popped = someInstance.storage[someInstance.index];
    delete someInstance[someInstance.index];
    someInstance.index = Math.max(someInstance.index - 1, 0);
    // or
    //someInstance.index > 0 ? someInstance.index-- : someInstance.index = 0;
    // or
    // if (someInstance.index > 0) {
    //   someInstance.index--;
    // }
    return popped;
  };

  someInstance.size = function() {
    return someInstance.index;
  };

  return someInstance;
};
