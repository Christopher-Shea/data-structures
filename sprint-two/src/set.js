const Set = function() {
  let set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

const setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
  // #ternarytown
  // this._storage = this._storage.concat(this.contains(item) ? [] : [item]);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
      break;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(n)
 * contains - O(n)
 * remove - O(n)
 */