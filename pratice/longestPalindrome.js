// Given a string s, return the longest palindromic substring in s.
var longestPalindrome = function (s) {
  let str = s.split("");
  console.log(str);
  toCheck = str;
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    if (checkPalindrom(toCheck.join(""))) {
      return toCheck.join("");
    } else {
      toCheck.pop();
    }
    return null;
  }
};
