// the function should return an array containing the shortest combination if numbers that add up to exactly the targetSum

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
