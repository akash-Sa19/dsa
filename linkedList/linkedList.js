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
      // while(curr.next) -> the last value of the curr will be node.value ( last node.value value)
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

list.prepend(20);
list.prepend(10);
// list.append(50)
list.append(600);
// console.log(list.head);
console.log(list.print());

const list2 = new linkedList();
list2.append(70);
list2.append(80);
// list2.append(10);
console.log(list2.print());

// for two linked list to be merge they should be sorted first
// or pass them as sorted linked list
var mergeTwoList = function (head1, head2) {
  // how can i merge two list??
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  let newList = new Node();
  let curr = newList;

  while (head1 && head2) {
    if (head1.value < head2.value) {
      // console.log(curr);
      curr.next = head1;
      // console.log(curr);
      head1 = head1.next;
      // console.log(curr);
    } else {
      curr.next = head2;
      head2 = head2.next;
    }
    curr = curr.next;
  }
  curr.next = head1 || head2;
  return newList.next;
};
// console.log(list.head);
console.log(mergeTwoList(list.head, list2.head));
