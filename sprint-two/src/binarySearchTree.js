var BinarySearchTree = function(initValue) { // creates a new tree everytime called
  if (!initValue) {
    alert('must initiate tree with value');
  }
  var instance = Object.create(binarySearchTreeMethod);
  instance.value = initValue;
  instance.left = null;
  instance.right = null;
  return instance;
};

binarySearchTreeMethod = {};

binarySearchTreeMethod.insert = function(value) {
  var insertTree = BinarySearchTree(value); // new tree to be added
  var treeMaker = function(tree, parentTree) {
    if (tree.value > parentTree.value) { // if greater, place in right
      if (parentTree.right) {
        treeMaker(tree, parentTree.right);
      } else {
        parentTree.right = tree;
      }
    } else if (tree.value < parentTree.value) {
      if (parentTree.left) {
        treeMaker(tree, parentTree.left);
      } else {
        parentTree.left = tree;
      }
    }
  };
  treeMaker(insertTree, this);

};

binarySearchTreeMethod.contains = function(value) {
  var flag = false;
  this.depthFirstLog(function(elem) {
    if (elem === value) {
      flag = true;
    }
  });
  return flag;
};

binarySearchTreeMethod.depthFirstLog = function(cb) {
  var depthFirst = function(tree) {
    var flagLeft, flagRight;
    cb(tree.value);
    if (!flagLeft) {
      flagLeft = true;
      if (!!tree.left) {
        depthFirst(tree.left);
      }
    }
    if (!flagRight) {
      flagRight = true;
      if (!!tree.right) {
        depthFirst(tree.right);
      }
    }
  };
  depthFirst(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



