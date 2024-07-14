function allCombinationSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return [[]];
  if (target < 0) return [];

  let combinations = [];

  for (let num of nums) {
    let remainder = target - num;
    let remainderCombination = allCombinationSum(remainder, nums, memo);

    if (remainderCombination.length > 0) {
      const targetComninations = remainderCombination.map((comb) => [
        num,
        ...comb,
      ]);
      combinations.push(...targetComninations);
    }
  }
  memo[target] = combinations;
  return combinations;
}

// Example usage:
const targetSum = 7;
const coins = [2, 3, 5];
const result = allCombinationSum(targetSum, coins);
console.log(result);
