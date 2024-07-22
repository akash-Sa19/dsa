// Given a set of N intervals denoted by 2D array A of size N x 2, the task is to find the length of maximal set of mutually disjoint intervals.
// Two intervals [x, y] & [p, q] are said to be disjoint if they do not have any point in common.
// Return a integer denoting the length of maximal set of mutually disjoint intervals.

function disjointIntervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let [prevS, prevE] = arr[0],
    count = 1;

  for (let n = 1; n < arr.length; n++) {
    let [s, e] = arr[n];
    if (s <= prevE) continue;
    else {
      s = prevS;
      e = prevE;
      count++;
    }
  }
  return count;
}
let A = [
  [1, 4],
  [2, 3],
  [4, 6],
  [8, 9],
];
console.log(disjointIntervals(A));
