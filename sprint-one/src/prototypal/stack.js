const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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