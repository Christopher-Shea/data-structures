class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.index++;
    this.storage[this.index] = value;
  }
  
  pop() {
    let popped = this.storage[this.index];
    delete this.storage[this.index];
    this.index = Math.max(this.index - 1, 0);
    return popped;
  }

  size() {
    return this.index;
  }
}