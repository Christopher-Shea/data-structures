const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

Stack.prototype.pop = function() {
  let popped = this.storage[this.index];
  delete this.storage[this.index];
  this.index = Math.max(this.index - 1, 0);
  return popped;
};

Stack.prototype.size = function() {
  return this.index;
};

