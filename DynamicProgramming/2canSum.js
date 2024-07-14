// m  = target sum , n = array length
// time =  O(n ^ m)
// space = O(m)

// this type of soltion is call top-down memorization sol

function canSum(targetSum, numbers) {
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers)) return true;
  }
  return false;
}

// time ->O(m * n)
// space -> O(m)
const canSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum2(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum2(7, [2, 3]));
console.log(canSum2(7, [2, 4]));
console.log(canSum2(7, [5, 3, 4, 7]));

console.log(canSum2(300, [14, 7]));
