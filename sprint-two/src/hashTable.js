

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // a dressing room
  this._encumberance = 0;


};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // special key converted for k(hash key)
  if (this._storage.get(index)) {
    this._storage.set(index, [this._storage.get(index), [k, v]]);
  } else {
    this._storage.set(index, [k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleValue;
  if (Array.isArray(this._storage.get(index)[0])) {
    this._storage.get(index).forEach(function(hashTuple) {
      if (hashTuple[0] === k) {
        tupleValue = hashTuple[1];
      }
    });
  } else {
    tupleValue = this._storage.get(index)[1];
  }
  return tupleValue;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [undefined, undefined]);

  HashTable.prototype.resize = function (newLimit) {
    var temp = this._storage;
    var tempLim = this._limit;
    this._storage = LimitedArray(newLimit);





  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


