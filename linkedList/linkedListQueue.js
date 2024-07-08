const linkedList = require("./headAndTailLinkedList.js");

// FIFO
class linkedListQueue {
  constructor() {
    this.list = new linkedList();
  }
  push(val) {
    this.list.append(val);
  }
  shift() {
    return this.list.removeFromFront();
  }
  size() {
    return this.list.getSize();
  }
  peek() {
    return this.list.head.value;
  }
  isEm() {
    return this.list.isEmpty();
  }
  print() {
    return this.list.print();
  }
}

const lq = new linkedListQueue();

console.log(lq.isEm());
lq.push(10);
lq.push(20);
lq.push(30);
lq.push(40);
lq.shift();
console.log(lq.peek());
console.log(lq.isEm());
console.log(lq.print());
