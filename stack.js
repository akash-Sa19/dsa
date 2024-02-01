// LIFO
class Stack {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    return this.items.push(element);
  }
  dequeue() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return `stack empty`;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return `empty stack`;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    return this.items.toString();
  }
  size() {
    return this.items.length;
  }
}

const stack = new Stack();

// console.log(stack.isEmpty());

// console.log(stack.enqueue(10));
// console.log(stack.enqueue(20));
// console.log(stack.enqueue(30));
// console.log(stack.enqueue(40));
// console.log(stack.enqueue(50));

// console.log(stack.print());

// console.log(stack.dequeue());
// console.log(stack.print());

// console.log(stack.peek());
// console.log(stack.size());

// optimized Stack
// LIFO
class optStack {
  constructor() {
    this.items = {};
    this.rear = -1;
    this.front = 0;
  }
  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
    return `index: ${this.rear - 1}`;
  }
  dequeue() {
    if (!this.isEmpty()) {
      let item = this.items[this.rear];
      delete this.items[this.rear];
      this.rear -= 1;
      return item;
    }
    return `stack is Empty`;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return `stack is empty`;
  }
  size() {
    return this.rear - this.front + 1;
  }
  print() {
    return this.items;
  }
}

let st = new optStack();

console.log(st.isEmpty());

console.log(st.enqueue(10));
console.log(st.enqueue(20));
console.log(st.enqueue(30));
console.log(st.enqueue(40));
console.log(st.enqueue(50));

console.log(st.dequeue());
console.log(st.dequeue());

console.log(st.peek());
console.log(st.print());

console.log(st.size());
