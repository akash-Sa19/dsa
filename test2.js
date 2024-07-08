/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function (numCourses, prerequisites) {
  function buildGraph(edges) {
    let graph = {};
    for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
    }
    for (let edge of edges) {
      let [course, prereq] = edge;
      graph[course].push(prereq);
    }
    return graph;
  }

  let preMap = buildGraph(prerequisites);
  const output = [];
  const visit = new Set();
  const cycle = new Set();

  // Depth-First Search function
  function dfs(crs) {
    if (cycle.has(crs)) {
      return false;
    }
    if (visit.has(crs)) {
      return true;
    }
    cycle.add(crs);
    for (let pre of preMap[crs]) {
      if (dfs(pre) === false) {
        return false;
      }
    }
    cycle.delete(crs);
    visit.add(crs);
    output.push(crs);
    return true;
  }

  // Check each course
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return [];
    }
  }
  return output;
};
