
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes[value] = value;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  if (this.nodes[value]) {
    return this.nodes[value] === value; // same as if else statement
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  this.forEachNode(function(node) {
    if (this.edges[node] === value) {
      delete this.edges[node];
    }
  });
  delete this.edges[value];
  delete this.nodes[value];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] && this.edges[toNode]) {
    return this.edges[fromNode][toNode] === toNode && this.edges[toNode][fromNode] === fromNode;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges[toNode] === undefined) {
    this.edges[toNode] = {};
  }
  if (this.edges[fromNode] === undefined) {
    this.edges[fromNode] = {};
  }
  this.edges[fromNode][toNode] = toNode;
  this.edges[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    console.log(this.nodes[key])
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = Graph();

