var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.counter = 0;
  instance.firstPosition = 0;
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  var temp = this[this.firstPosition];
  delete this[this.firstPosition];
  if (this.firstPosition < this.counter) {
    this.firstPosition++;
  }
  return temp;
};

queueMethods.size = function() {
  return this.counter - this.firstPosition;
};