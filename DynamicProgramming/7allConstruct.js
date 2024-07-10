// the function should return a 2d array containing all of the ways that the "target" can be constructed by concerntrating elements of the "workbank" array. Each element of the 2d array should represent one combination that constructs the "target". You may resuse elements if "wordbank" as many times as needed

// the optmized version and the simple version doesn't make any excetional difference
// time O(n^m) -> exponential
// space O(m)

const allConstruct = (target, wordbank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  const result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordbank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct("abcdef", ["ab", "abc", "abcd", "cd", "def"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
);
