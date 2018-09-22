const Set = function() {
  let set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

const setPrototype = {};

setPrototype.add = function(item) {
  let itemKey = JSON.stringify(item);
  if (!this.contains(item)) {
    this._storage[itemKey] = item;
  }
};

setPrototype.contains = function(item) {
  let itemKey = JSON.stringify(item);
  return (itemKey in this._storage);
};

setPrototype.remove = function(item) {
  let itemKey = JSON.stringify(item);
  if (itemKey in this._storage) {
    delete this._storage[itemKey];
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(n)
 * contains - O(n)
 * remove - O(n)
 */