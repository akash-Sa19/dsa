// Say that you are a traveler in a 2d grid. You begain in the top-left corner and your goal is to travel to the bottom-right corner. you may only move dowm or right
// In How may ways can you travle to the goal on a grif with dimmensions m * n

// time  O(2 ^ m+n)
// space  O(m +n)
function gridTraveler(n, m, memo = {}) {
  if (m == 0 || n == 0) return 0;
  if (m == 1 || n == 1) return 1;

  return gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
}

//  time  O(n * m)
//  space  O(n + m)
function gridTraveler2(n, m, memo = {}) {
  // are the arg in the memo
  if (`${n},${m}` in memo) return memo[`${n},${m}`];
  if (m == 0 || n == 0) return 0;
  if (m == 1 || n == 1) return 1;

  memo[`${n},${m}`] =
    gridTraveler2(n - 1, m, memo) + gridTraveler2(n, m - 1, memo);
  return memo[`${n},${m}`];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler2(3, 3));
console.log(gridTraveler2(180, 18));
