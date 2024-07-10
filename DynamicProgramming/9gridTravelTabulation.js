// Say that you are a traveler in a 2d grid. You begain in the top-left corner and your goal is to travel to the bottom-right corner. you may only move dowm or right
// In How may ways can you travle to the goal on a grif with dimmensions m * n

// time O(m * n)
// space O(m * n)

const gridTraveler = (m, n) => {
  let table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) {
        table[i][j + 1] += current;
      }
      if (i + 1 <= m) {
        table[i + 1][j] += current;
      }
    }
  }
  return table[m][n];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(180, 18));
