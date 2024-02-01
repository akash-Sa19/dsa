function checkPalindrom(s) {
  sRev = s.split("").reverse().join("");
  if (s === sRev) {
    return true;
  }
  return false;
}
const checkPalindrom2 = (s) => {
  let str = s.split("");
  let j = s.length - 1;
  for (let i = 0; i < s.length / 2; i++) {
    console.log(i);
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
  }
  return true;
};
const checkPalindrome3 = (s) => {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i++) {
    rev += s[i];
  }
  if (rev === s) {
    return true;
  }
  return false;
};

console.log(checkPalindrom("kayak"));
console.log(checkPalindrom2("2222"));

let apple = "apple";
console.log(apple[1]);
