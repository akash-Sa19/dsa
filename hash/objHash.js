var twoSum = function (nums, target) {
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (target - num in pairIdx) {
      console.log(pairIdx);
      return [i, pairIdx[target - num]];
    }
    pairIdx[num] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
