// You are given a 𝑚×𝑛 2D grid initialized with these three possible values:

// -1 - A water cell that can not be traversed.
// 0 - A treasure chest.
// INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
// Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.
// Assume the grid can only be traversed up, down, left, or right.

class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    let ROWS = grid.length;
    let COLS = grid[0].length;

    let visited = new Set();
    let q = [];

    function addRoom(r, c) {
      if (
        r < 0 ||
        r >= ROWS ||
        c < 0 ||
        c >= COLS ||
        visited.has(`${r},${c}`) ||
        grid[r][c] === -1
      )
        return;

      visited.add(`${r},${c}`);
      q.push([r, c]);
    }

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c] === 0) {
          q.push([r, c]);
          visited.add(`${r},${c}`);
        }
      }
    }

    let dist = 0;
    while (q.length > 0) {
      let qLen = q.length;
      for (let i = 0; i < qLen; i++) {
        // think to notice is that the dist will change after the for loop is ended
        let [r, c] = q.shift();
        grid[r][c] = dist;

        addRoom(r + 1, c);
        addRoom(r - 1, c);
        addRoom(r, c + 1);
        addRoom(r, c - 1);
      }
      dist += 1;
    }
  }
}
