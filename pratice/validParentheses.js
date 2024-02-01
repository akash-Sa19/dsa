// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

class stack {
  constructor() {
    this.items = {};
    this.rear = 0;
  }

  isEmpty() {
    return this.rear === 0;
  }
  getSize() {
    return this.rear;
  }
  push(element) {
    this.rear++;
    this.items[this.rear] = element;
  }
  pop() {
    if (!this.isEmpty()) {
      let item = this.items[this.rear];
      delete this.items[this.rear];
      this.rear--;
      return item;
    }
    return null;
  }
  print() {
    return this.items;
  }
  getRearElement() {
    return this.items[this.rear];
  }
}
const isValid = function (s) {
  const st = new stack();
  for (let bracket of s) {
    if (bracket === "{" || bracket === "[" || bracket === "(") {
      st.push(bracket);
      console.log(st.print());
    } else {
      console.log(bracket);
      let rearElement = st.getRearElement();
      console.log(rearElement);
      if (
        (rearElement !== "{" && bracket === "}") ||
        (rearElement !== "(" && bracket === ")") ||
        (rearElement !== "[" && bracket === "]")
      ) {
        return false;
      }
      st.pop();
    }
  }
  console.log(st.getSize());
  return !st.getSize();
};

console.log(isValid("[{{()}{}}]()"));

// const isVal = function (s) {
//   const st = new stack();
//   for (let bracket of s) {
//     if (bracket === "{" || bracket === "[" || bracket === "(") {
//       st.push(bracket);
//     } else {
//       if (
//         (st.getRearElement() !== "{" && bracket === "}") ||
//         (st.getRearElement() !== "(" && bracket === ")") ||
//         (st.getRearElement() !== "[" && bracket === "]")
//       ) {
//         return false;
//       }
//       st.pop();
//     }
//   }
//   return !st.getSize();
// };
// console.log(isVal("[{{()}{[}}]()"));

var isVal = function (s) {
  let arr = [];
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let brck of s) {
    console.log(brck);
    if (brck in obj) {
      console.log(brck);
      arr.push(brck);
    } else {
      let a = arr.pop();
      if (obj[a] !== brck) return false;
    }
  }
  return arr.length === 0;
};

console.log(isVal("{}{[]}"));
