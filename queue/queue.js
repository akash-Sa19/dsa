// simple Queue
// FIFO
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.toString();
  }
}

const queue = new Queue();
// console.log(queue.isEmpty());
// console.log(queue.enqueue(5));
// console.log(queue.enqueue(6));
// console.log(queue.enqueue(7));
// console.log(queue.enqueue(8));

// console.log(queue.peek());

// console.log(queue.print());

// console.log(queue.dequeue());
// console.log(queue.print());

// optimized queue
class optQueue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;

    return `index: ${this.rear - 1}`; //custom return
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    return this.items;
  }
}

const que = new optQueue();

// console.log(que.isEmpty());
// console.log(que.enqueue("apple"));
// console.log(que.enqueue("mango"));
// console.log(que.enqueue("banana"));
// console.log(que.enqueue("kiwi"));

// console.log(que.print());

// console.log(que.dequeue());
// console.log(que.print());

// console.log(que.size());
// console.log(que.peek());

// Circular Queue
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
      return `index: ${this.rear}`;
    }
    return `queue full`;
  }
  dequeue() {
    if (this.isEmpty()) {
      return `queue empty`;
    }
    let item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return `queue empty `;
  }
  print() {
    if (this.isEmpty()) {
      return "queue us empty";
    } else {
      // let i;
      // let str = "";
      // for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      //   str += this.items[i] + " ";
      // }
      // str += this.items[i];
      // return str;
      return this.items.toString();
    }
  }
}

const cirQue = new CircularQueue(5);

console.log(cirQue.isEmpty());

console.log(cirQue.enqueue(10));
console.log(cirQue.enqueue(20));
console.log(cirQue.enqueue(30));
console.log(cirQue.enqueue(40));
console.log(cirQue.enqueue(50));
console.log(cirQue.enqueue(60));
console.log(cirQue.enqueue(70));

console.log(cirQue.print());

console.log(cirQue.peek());
let arr = [1, 2, 3, 4, 10, "as"];
console.log(arr.unshift("apple"));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.shift());
console.log(arr);
