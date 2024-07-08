function encode(strs) {
  let str = "";
  for (let i of strs) {
    let num = Number(i.length);
    str += num + "#" + i;
  }
  return str;
}
function decoded(str) {
  let res = [],
    i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] != "#") {
      j += 1;
    }
    let len = Number(str.substring(i, j));
    res.push(str.substring(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return res;
}

let s = "5#apple3#are2#on3#the3#way";
console.log(s.substring(1, 4));

console.log(encode(["apple", "are", "on", "the", "way"]));
console.log(decoded("5#apple3#are2#on3#the3#way"));

console.log(typeof 1);
