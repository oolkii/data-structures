var Queue = function() {
// define new object
  var instance = {};
// add private variables to new object
  instance.counter = 0;
// add queueMethods to new object
  instance.firstPosition = 0;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
// return new object
  return instance;
};

var queueMethods = {};


//  create method for enqueue - pushes to end of line and adds to counter
queueMethods.enqueue = function (value) {
  this[this.counter] = value;
  this.counter++;
};
//  create method for dequeue - pops the first position and moves first position up one -
queueMethods.dequeue = function () {
  var temp = this[this.firstPosition];
  delete this[this.firstPosition];
  if (this.firstPosition < this.counter) {
    this.firstPosition++;
  }
  return temp;
};
//  create method for size that finds the length by evaluating difference between counter and first position
queueMethods.size = function () {
  return this.counter - this.firstPosition;
};




