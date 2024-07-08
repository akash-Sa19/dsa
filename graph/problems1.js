// Connected components count

// Write a function, connectedComponenetCount, that takes in the adjancey list of an undirected graph.
// The function should return the number of connected components within the graph

graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const connectedComponenetsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }
  return count;
};

const explore = (graph, curr, visited) => {
  if (visited.has(String(curr))) return false;
  visited.add(String(curr));

  for (let neighbor of graph[curr]) {
    explore(graph, neighbor, visited);
  }
  return true;
};

console.log(connectedComponenetsCount(graph));
