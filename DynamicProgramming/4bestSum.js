// the function should return an array containing the shortest combination if numbers that add up to exactly the targetSum

// this type of soltion is call top-down memorization sol

//  m =targetSum , n = numbers.length
//  time = O(n^m * m)
// space = O(m^2)

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestComb = null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    const res = bestSum(remainder, numbers);
    if (res !== null) {
      const combination = [...res, num];
      if (shortestComb == null || combination.length < shortestComb.length) {
        shortestComb = combination;
      }
    }
  }
  return shortestComb;
};

// time O(m * n * m ) = O(m^2  *n)
// space O(m^2)

// this solution is not working for testcase (1000, [1]) ->because a error is coming that  indicates that code is running into a memory allocation issue, causing the JavaScript heap to run out of memory. This is likely due to the recursive nature of the bestSum function, which can lead to deep recursion and large amounts of memory being used, especially for larger input values.
const bestSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestComb = null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    const res = bestSum2(remainder, numbers, memo);
    if (res !== null) {
      const combination = [...res, num];
      if (shortestComb == null || combination.length < shortestComb.length) {
        shortestComb = combination;
      }
    }
  }
  memo[targetSum] = shortestComb;
  return memo[targetSum];
};

console.log(bestSum2(7, [2, 3]));
console.log(bestSum2(7, [2, 4]));
console.log(bestSum2(7, [5, 4, 3]));
console.log(bestSum2(300, [14, 7, 4]));

// we will use truly DP
// bottom-up solution
var coinChange = function (coins, amount) {
  // instead of filling dp array with (amount+1), we can fill it with Infinity, somthing that can't be the answer
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (let c of coins) {
      if (a - c >= 0) {
        // this plus one is +1coin not +1coin.value
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
