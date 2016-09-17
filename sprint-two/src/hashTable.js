

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // a dressing room
  this._encumberance = 0;
  console.log(this._storage);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // special key converted for k(hash key)
  var dresser = this._storage[index];
  if ( dresser === undefined ) {
    dresser = [];
    this._storage[index] = dresser;
  }
  var overwrite = false;
  dresser.forEach(function(drawer) {
    if (drawer[0] === k) { // if k is found
      drawer[1] = v;        // overwrite the v
      overwrite = true;
    }
  });
  if (!overwrite) {         // if k not found
    dresser.push([k, v]);    // create k, v
    this._encumberance++;
    // if (this._encumberance === .75 * this._limit) {
    //   console.log("resizing!");
    //   temp = this._storage;
    //   this._limit -= (.5 * this._limit);
    //   this._storage = LimitedArray(this._limit);
    //   for (var key in temp) {
    //     //console.log(typeof temp, typeof key, temp);
    //     key.forEach(function(drawer) {
    //       this.insert(drawer[0], drawer[1]);
    //     });

    //   }
    // }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var dresser = this._storage[index];
  var content;
  dresser.forEach(function(drawer) {
    if (drawer[0] === k) {
      content = drawer[1];
    }
  });
  return content;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var dresser = this._storage[index];
  if ( dresser === undefined ) {
    dresser = [];
    this._storage[index] = dresser;
  }
  for (var i = 0; i < dresser.length; i++) {
    if (dresser[i][0] === k) {
      dresser.splice(i, 1);
    }
    this._encumberance--;
  }
  HashTable.prototype.resize = function (newLimit) {
    var temp = this._storage;
    var tempLim = this._limit;
    this._storage = LimitedArray(newLimit);



  };
  // if (this._encumberance === .25 * this._limit) {
  //   console.log("resizing!");
  //   temp = this._storage;
  //   this._limit -= (.5 * this._limit);
  //   this._storage = LimitedArray(this._limit);
  //   temp.forEach(function(dresser) {
  //     dresser.forEach(function(drawer) {
  //       this.insert(drawer[0], drawer[1]);
  //     });
  //   });
  // }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


