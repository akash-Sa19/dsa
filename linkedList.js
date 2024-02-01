class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this.size - 1;
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let cur = this.head;
      // while(curr) -> the last value of the curr will be null (last node.next value)
      // while(curr) -> the last value of the curr will be node.value ( last node.value value)
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++;
    return this.size - 1;
  }
  //   O(n)
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
  //   O(n)
  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else if (index < 0 || index > this.size) {
      return null;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      const node = new Node(value);
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  // O(n)
  remove(val) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return `node removed`;
    } else {
      let prev = this.head;
      while (prev.next.value !== val && prev.next) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return true;
      }
    }
  }
  // O(n)
  search(val) {
    if (this.isEmpty()) {
      return null;
    } else {
      let i = 0;
      let searchedNode = this.head;
      while (searchedNode) {
        if (searchedNode.value === val) return i;
        searchedNode = searchedNode.next;
        i++;
      }
    }
    return -1;
  }
  //   O(n)
  reverse() {
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
      }
      this.head = prev;
      return list.print();
    }
  }
}
const list = new linkedList();

console.log(list.isEmpty());

console.log(list.prepend(10));
console.log(list.prepend(20));
console.log(list.prepend(30));
console.log(list.prepend(40));
console.log(list.append(50));
console.log(list.append(60));
console.log(list.prepend(70));

console.log(list.getSize());

console.log(list.isEmpty());
console.log(list.print());

list.insert(100, 5);
console.log(list.print());
console.log(list.insert(100, 7));
console.log(list.insert(110, 1));
console.log(list.print());
console.log(list.getSize());

console.log(list.remove(110));
console.log(list.print());

console.log(list.remove(10));
console.log(list.print());

console.log(list.search(300));

console.log(list.reverse());
