const linkedList = require("./headAndTailLinkedList");

console.log("apple");
// console.log(linkedList);

class linkedListStack {
  constructor() {
    this.list = new linkedList();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

// const stack = new linkedListStack();
// console.log(stack.isEmpty());

// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.print());

// stack.pop();
// console.log(stack.print());

// console.log(stack.getSize());

// console.log(stack.peek());
