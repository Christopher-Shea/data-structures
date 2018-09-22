const HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let startIndex = getIndexBelowMaxForKey(k, this._limit);
  let set = false;
  
  if (!this._storage.get(startIndex)) {
    this._storage.set(startIndex, [k, v]);
    set = true;
    this._size++;
  }

  if (this._storage.get(startIndex)[0] === k) {
    this._storage.set(startIndex, [k, v]);
    set = true;
  }
  
  if (!set) {
    for (let i = startIndex + 1, j = this._limit; i < j; i++) {
      if (!this._storage.get(i)) {
        this._storage.set(i, [k, v]);
        set = true;
        this._size++;
        break;
      }
      if (this._storage.get(i)[0] === k) {
        this._storage.set(i, [k, v]);
        set = true;
        break;
      }
    }
  }

  if (!set) {
    for (let i = 0, j = startIndex; i < j; i++) {
      if (!this._storage.get(i)) {
        this._storage.set(i, [k, v]);
        set = true;
        this._size++;
        break;
      }
      if (this._storage.get(i)[0] === k) {
        this._storage.set(i, [k, v]);
        set = true;
        break;
      }
    }
  }

  if (set && (this._size / this._limit) >= 0.75) {
    this.reSize();
  }
};

HashTable.prototype.retrieve = function(k) {
  let startIndex = getIndexBelowMaxForKey(k, this._limit);
  let retrieved = false;

  if (this._storage.get(startIndex) && this._storage.get(startIndex)[0] === k) {
    retrieved = true;
    return this._storage.get(startIndex)[1];
  }
  
  if (!retrieved) {
    for (let i = startIndex, j = this._limit; i < j; i++) {
      if (this._storage.get(i) && this._storage.get(i)[0] === k) {
        retrieved = true;
        return this._storage.get(i)[1];
      }
    }
  }

  if (!retrieved) {
    for (let i = 0, j = startIndex; i < j; i++) {
      if (this._storage.get(i) && this._storage.get(i)[0] === k) {
        retrieved = true;
        return this._storage.get(i)[1];
      }
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  let startIndex = getIndexBelowMaxForKey(k, this._limit);
  let removed = false;

  if (this._storage.get(startIndex) && this._storage.get(startIndex)[0] === k) {
    this._storage.set(startIndex, undefined);
    removed = true;
    this._size--;
  }
  
  if (!removed) {
    for (let i = startIndex, j = this._limit; i < j; i++) {
      if (this._storage.get(startIndex) && this._storage.get(i)[0] === k) {
        this._storage.set(i, undefined);
        removed = true;
        this._size--;
      }
    }
  }

  if (!removed) {
    for (let i = 0, j = startIndex; i < j; i++) {
      if (this._storage.get(startIndex) && this._storage.get(i)[0] === k) {
        this._storage.set(i, undefined);
        removed = true;
        this._size--;
      }
    }
  }

  if (removed && (this._size / this._limit) <= 0.25 && this._limit !== 8) {
    this.reSize();
  }
};

HashTable.prototype.reSize = function() {
  this._limit = (this._size / this._limit < 0.5) ? this._limit / 2 : this._limit * 2;
  this._size = 0;

  this._oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);

  let tuples = [];
  this._oldStorage.each(function(tuple) {
    if (tuple) {
      tuples.push(tuple);
    }
  });

  tuples.forEach(tuple => this.insert(...tuple));
  delete this._oldStorage;
};
/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(1)
 retrieve - O(1)
 remove - O(1)
 reSize - O(n)
 */


// Using a native object as a bucket at each index (sort of using a hash table to build a hash table... shortcut)
// const HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   let index = getIndexBelowMaxForKey(k, this._limit);
//   if (!this._storage.get(index)) {
//     this._storage.set(index, {[k]: v});
//   } else {
//     this._storage.get(index)[k] = v;
//   }
// };

// HashTable.prototype.retrieve = function(k) {
//   let index = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index)[k];
// };

// HashTable.prototype.remove = function(k) {
//   let index = getIndexBelowMaxForKey(k, this._limit);
//   delete this._storage.get(index)[k];
// };


