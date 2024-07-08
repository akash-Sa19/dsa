// Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
// The function should return the size of the largest connected component in the graph.
let graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

function largestComponent(graph) {
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    console.log(node);
    const size = explore(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
}

function explore(graph, node, visited) {
  if (visited.has(node)) return 0;
  visited.add(node);

  let size = 1;
  for (let neighbor of graph[node]) {
    console.log(neighbor);
    size += explore(graph, neighbor, visited);
  }
  return size;
}

console.log(largestComponent(graph));
