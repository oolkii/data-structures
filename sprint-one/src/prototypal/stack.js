var Stack = function() {
  var instance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  instance.counter = 0;
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;
  return instance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function () {
  if ( this.counter > 0 ) {
    this.counter--;
  }
  var temp = this[this.counter];
  delete this[this.counter];
  return temp;
};

stackMethods.size = function () {
  return this.counter;
};