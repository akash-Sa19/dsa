const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

function shortestDistance(graph) {
  let visited = new Set();
  for (let node in graph) {
    explore(graph, node, visited);
  }
}
function explore(graph, node, visited) {
  if (visited.has(graph[node])) return false;
}
