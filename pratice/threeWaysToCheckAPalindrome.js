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

var checkPalindrome4 = function (s) {
  if (s == " ") return true;
  if (s.length == 1) return true;

  let newStr = "";
  for (let i of s) {
    // console.log(i);
    let charCode = i.charCodeAt();
    if (
      (charCode > 47 && charCode < 58) || // numeric (0-9)
      (charCode > 64 && charCode < 91) || // upper alpha (A-Z)
      (charCode > 96 && charCode < 123) // lower alpha (a-z)
    ) {
      newStr += i.toLowerCase();
    }
  }

  return newStr === newStr.split("").reverse().join("");
};

console.log(checkPalindrom("kayak"));
console.log(checkPalindrom2("2222"));

let apple = "apple";
console.log(apple[1]);
