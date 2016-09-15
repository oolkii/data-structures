var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.firstPosition = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var temp = this[this.firstPosition];
  delete this[this.firstPosition];
  if (this.firstPosition < this.counter) {
    this.firstPosition++;
  }
  return temp;
};

Queue.prototype.size = function() {
  return this.counter - this.firstPosition;
};

var queue = new Queue();