const Stack = function() {
  let someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.index = 0;
  
  return someInstance;
};

const stackMethods = {};

stackMethods.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

stackMethods.pop = function() {
  let popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index = Math.max(this.index - 1, 0);
  return popped;
};

stackMethods.size = function() {
  return this.index;
};