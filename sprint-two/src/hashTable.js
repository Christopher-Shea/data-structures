const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let overwritten = false;
  if (!this._storage.get(index)) {
    this._storage.set(index, {[k]: v});
  } else {
    this._storage.get(index)[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1)
 retrieve - O(1)
 remove - O(1)
 */


