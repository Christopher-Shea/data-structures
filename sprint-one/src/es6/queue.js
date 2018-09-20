class Queue {
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  
  enqueue(value) {
    this.index++;
    this.storage[this.index] = value;
  }

  dequeue() {
    let popped = this.storage[1];
    for (let i = 1; i < this.index; i++) {
      this.storage[i] = this.storage[i + 1];
      delete this.storage[i + 1];
    }
    this.index = Math.max(this.index - 1, 0);
    return popped;
  }

  size() {
    return this.index;
  }
}
