const Stack = function() {
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

