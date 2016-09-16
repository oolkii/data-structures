var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var currentNode = this.head;
    var newNode = new Node(value);

    if (!currentNode) {
      this.head = this.tail = newNode;
      this.length++;
      return newNode;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode.next = newNode;
    this.length++;
  };

  list.removeHead = function() {
    var temp = this.head;
    delete this.head;
    if (temp.next !== null) {
      this.head = temp.next;
    }
    return temp.value;
  };

  list.contains = function(target) {
    var flag = false;
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        flag = true;
      }
      currentNode = currentNode.next;
    }
    return flag;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
