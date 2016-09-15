var Stack = function(start) {
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this[this.counter] = value;
  this.counter++;
};
Stack.prototype.pop = function () {
  if (this.counter > 0) {
    this.counter--;
  }
  var temp = this[this.counter];
  delete this[this.counter];
  return temp;
};
Stack.prototype.size = function() {
  return this.counter;
};
var stack = new Stack();
