// the function should return the number of ways that the "target" count be constructed by concatenating elements of 'wordbank array.
// You may reuse elements if "wordBank" as many times as needed
const countConstruct = (target, wordbank) => {
  if (target == "") return 1;

  let count = 0;
  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      let numOfWays = countConstruct(suffix, wordbank);
      count += numOfWays;
    }
  }

  return count;
};
const countConstruct2 = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == "") return 1;

  let count = 0;
  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      let numOfWays = countConstruct2(suffix, wordbank, memo);
      count += numOfWays;
    }
  }
  memo[target] = count;
  return count;
};

console.log(countConstruct("abcdef", ["ab", "abc", "abcd", "cd", "def"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct2("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
);
