// the function should return an array conatining any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null
// If there are multiple combinations possible, you may return any single one

// this type of soltion is call top-down memorization sol

// m = targetSum, n = array length
// time O(n^m * m)
// space O(m)

function howSum(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const res = howSum(remainder, numbers);
    if (res !== null) {
      return [...res, num];
    }
  }
  return null;
}

// time = O(n * m * m)
//  space = O(m^2)
function howSum2(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const res = howSum2(remainder, numbers, memo);
    if (res !== null) {
      memo[targetSum] = [...res, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum2(7, [2, 3]));
console.log(howSum2(7, [2, 4]));
console.log(howSum2(7, [5, 3, 4, 7]));
console.log(howSum2(300, [14, 7, 4]));
