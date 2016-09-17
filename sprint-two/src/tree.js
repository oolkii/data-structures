var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
// check if tree has children
  // if so, loop thru children, add each children to ..
// loop thru each child, call .addChild on each child
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
// set a result variable to false
// loop thru tree's children
  // if target equal any children, change result to true
// return result
  var result = false;
  var recursiveSearch = function (tree) {
    tree.children.forEach(function(node) {
      if (node.value === target) {
        result = true;
      } else {
        recursiveSearch(node);
      }
    });
  };
  recursiveSearch(this);
  return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */