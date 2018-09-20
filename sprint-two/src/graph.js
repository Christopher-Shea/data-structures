

// Instantiate a new graph
const Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.nodes = this.nodes.filter(x => x !== node);
  this.edges = this.edges.filter(edge => !(edge.includes(node)));
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges.some(edge => edge.includes(fromNode) && edge.includes(toNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges = this.edges.filter(edge => !(edge.includes(fromNode) && edge.includes(toNode)));
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};


// const Graph = function() {
//   this.vertices = {};
//   this.edges = [];
// };

// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   this.vertices[node] = node;
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {
//   return (node in this.vertices);
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
//   if (node in this.vertices) {
//     delete this.vertices[node];
//   }
//   for (var i = 0; i < this.edges.length; i++) {
//      if (node in this.edges[i]) {
//        this.edges.splice(i, 1);
//        break;
//      }
//   }
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {
//   for (let edge of this.edges) {
//     if ((fromNode in edge) && (toNode in edge)) {
//       return true;
//     }
//   }
//   return false;
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {
//   let newEdge = {};
//   newEdge[fromNode] = fromNode;
//   newEdge[toNode] = toNode;
//   this.edges.push(newEdge);
// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
//   for (var i = 0; i < this.edges.length; i++) {
//     if ((fromNode in this.edges[i]) && (toNode in this.edges[i])) {
//       this.edges.splice(i, 1);
//       break;
//     } 
//   }
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {
//   let nodes = this.vertices;
//   Object.keys(nodes).forEach(function(nodeKey) {
//     cb(nodes[nodeKey]);
//   });
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */


