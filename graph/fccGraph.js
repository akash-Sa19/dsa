const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function depthFirstSearch(graph, source) {
  const stack = [source],
    res = [];

  while (stack.length > 0) {
    const curr = stack.pop();
    res.push(curr);
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
  console.log(res);
  return res;
}
console.log(depthFirstSearch(graph, "a"));

function breadthFirstSearch(graph, source) {
  const queue = [source],
    res = [];

  while (queue.length > 0) {
    const curr = queue.shift();
    res.push(curr);
    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
  console.log(res);
  return res;
}
breadthFirstSearch(graph, "a");

// adjacency list
let graph2 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
function hasPath(graph, src, dst) {
  //dst == destination
  if (src == dst) return true;

  const stack = [src];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr === dst) return true;
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
  return false;
}
console.log(hasPath(graph2, "f", "j"));

function hasPathBFS(graph, src, dst) {
  if (src == dst) return true;
  const queue = [src];

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr == dst) return true;
    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
  return false;
}
console.log(hasPathBFS(graph2, "f", "i"));

function hasPathRecursive(graph, src, dst, visited = new Set()) {
  if (src === dst) return true;

  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  return false;
}
console.log(hasPathRecursive(graph2, "f", "g"));

let edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

function createGraph(edges) {
  if (edges.length == 0) return {};

  const graph = {};
  for (let edge of edges) {
    let [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);
  return graph;
}
createGraph(edges);
