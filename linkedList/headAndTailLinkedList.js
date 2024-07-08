class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  giveHead() {
    return this.head;
  }
  giveTail() {
    return this.tail;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      return `empty list`;
    } else {
      let cur = this.head;
      let list = "";
      while (cur) {
        list += `${cur.value} `;
        cur = cur.next;
      }
      return list;
    }
  }
  // O(1)
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // O(1)
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  // O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    let val = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return val;
  }
  // O(n)
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const val = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return val;
  }
}

module.exports = linkedList;

// const ll = new linkedList();
// ll.prepend(10);
// ll.prepend(20);
// ll.append(30);
// console.log(ll.print());

// ll.removeFromFront();
// console.log(ll.giveHead());
// console.log(ll.giveTail());
// console.log(ll.print());
// console.log(ll.head);
