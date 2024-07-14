// the function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array
// this type of soltion is call top-down memorization sol

// m = target.length , n = wordbank.length
//  time = O(n^m * m)
// space = O(m^ 2)

const canConstruct = (target, wordbank) => {
  if (target == "") return true;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordbank) == true) {
        return true;
      }
    }
  }
  return false;
};

// time O(n * m^2)
// space O(m^2)
const canConstruct2 = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == "") return true;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct2(suffix, wordbank, memo) == true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return memo[target];
};

console.log(canConstruct2("abcdef", ["ab", "abc", "abcd", "cd", "def"]));
console.log(
  canConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct2("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
);

// dp bottom-up approch
