// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let nums = [1, 1, 2];
var removeDuplicates = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      arr.push(nums[i]);
    } else {
      continue;
    }
  }
  console.log(arr);
  return arr.length;
  // let i = 0;
  // for (let j = 1; j < nums.length; j++) {
  //   if (nums[i] !== nums[j]) {
  //     i++;
  //     nums[i] = nums[j];
  //   }
  // }
  // return i + 1;
};

console.log(removeDuplicates(nums));

// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
console.log(strStr("sadbutsad", "sad"));

// binary search
var searchInsert = function (nums, target) {};
function binarySearch(nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let midIndex;
  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log(leftIndex);
    console.log(rightIndex);
    if (target === nums[midIndex]) {
      return midIndex;
    } else if (target < nums[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  console.log(leftIndex);
  console.log(rightIndex);
  return leftIndex ;
}
let arr = [1, 3, 5, 7];
console.log(binarySearch(arr,99));


// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// let s = "   fly me   to   the moon  ";
let s = "luffy is still joyboy";
// console.log(s.trim());

var lengthOfLastWord = function (s) {
    let arr = s.trim().split(" ")
    return arr[arr.length -1].length
};
console.log(lengthOfLastWord(s));

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function (digits) {
    let str = Number(digits.join(""))
    str++
    console.log(str);

    console.log(str.toString().split(""))
    return 
};

console.log(plusOne(arr));

var climbStairs = function (n) {
  if (n < 2) return n;
  else if (n === 2) {
    return 2;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};
console.log(climbStairs(5))