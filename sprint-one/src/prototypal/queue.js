const Queue = function() {
  let someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.index = 0;
  
  return someInstance;
};

const queueMethods = {};

queueMethods.enqueue = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

queueMethods.dequeue = function() {
  let popped = this.storage[1];
  for (let i = 1; i < this.index; i++) {
    this.storage[i] = this.storage[i + 1];
    delete this.storage[i + 1];
  }
  this.index = Math.max(this.index - 1, 0);
  return popped;
};

queueMethods.size = function() {
  return this.index;
};
