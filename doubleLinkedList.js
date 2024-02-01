class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
class doubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getsize() {
    return this.size;
  }
  enqueue(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromEnd() {
    const val = this.tail;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return val;
  }
  removeFromFront() {
    const val = this.head;
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return val;
  }
  print() {
    let curr = this.head;
    let st = "";
    while (curr) {
      st += curr.value + " ";
      curr = curr.next;
    }
    return st;
  }
  printReverse() {
    let curr = this.tail;
    let st = "";
    while (curr) {
      st += curr.value + " ";
      curr = curr.prev;
    }
    return st;
  }
}

const dll = new doubleLinkedList();

dll.enqueue(10);
dll.enqueue(20);
dll.enqueue(30);
dll.enqueue(40);
dll.enqueue(50);
dll.enqueue(70);
dll.append(60);
dll.removeFromFront();
dll.removeFromEnd();

console.log(dll.print());
console.log(dll.printReverse());
