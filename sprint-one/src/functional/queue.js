var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0;
  var firstPosition = 0;
  var length = function() {
    return counter - firstPosition;
  }

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (firstPosition === counter) {
      return;
    }
    var temp = storage[firstPosition];
    delete storage[firstPosition];
    firstPosition++;
    return temp;
  };

  someInstance.size = function() {
    return length();
  };

  return someInstance;
};
