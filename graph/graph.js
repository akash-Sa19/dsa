// Adjacency matrix
// const matrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0],
// ]
// console.log(matrix[0][1]);

// const adjancyList = {
//     "A": ["B"],
//     "B": ["A", "C"],
//     "C": ["B"]
// }

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  //   O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  //   O(1)
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  //   O(1)
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
  //   O(1)
  hasEdge(vertext1, vertex2) {
    return (
      this.adjacencyList[vertext1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertext1)
    );
  }
  //   O(1)
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  //   depends on the no. of adjacent vertices
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

// graph.display();

console.log(graph.hasEdge("A", "C"));
console.log(graph.hasEdge("A", "B"));

graph.removeEdge("A", "B");
// graph.display();

graph.removeVertex("A");
graph.display();
