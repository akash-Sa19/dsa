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
depthFirstSearch(graph, "a");

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

let graph2 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
function hasPath(graph, src, dst) {
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

function hasPathRecursive(graph, src, dst, visited) {
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

let edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

function createGraph(edges) {
  if (!edges) return {};

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
// createGraph(edges);

// this function with check if their is a path between node1 and ndoe2
function undirectedPath(edges, nodeA, nodeB) {
  const graph = createGraph(edges);
  //   console.log(graph);
  return hasPath(graph, nodeA, nodeB, new Set());
}
// undirectedPath(edges, "i", "k")
console.log(undirectedPath(edges, "i", "o"));
