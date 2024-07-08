// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

class Node {
  constructor(val) {
    this.value = val;
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
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      this.head = node;
      node.next = curr;
    }
    this.size++;
    return this.size;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
    return this.size;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let arr = [];
      let curr = this.head;
      while (curr.next) {
        arr.push(curr.value);
        curr = curr.next;
      }
      arr.push(curr.value);
      return arr;
    }
  }
}

const ll = new linkedList();
ll.prepend(2);
ll.prepend(2);
ll.prepend(1);
// ll.prepend(1);
console.log(ll.print());

const lll = new linkedList();
lll.prepend(4);
lll.prepend(3);
lll.prepend(1);
console.log(lll.print());

const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.value < list2.value) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

console.log(mergeTwoLists(ll.head, lll.head));

// Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// var deleteDuplicates = function (head) {
//   console.log(head);
//   let curr = head;
//   while (curr && curr.next) {
//     if (curr.val == curr.next.val) {
//       curr.next = curr.next.next;
//     } else {
//       curr = curr.next;
//     }
//   }
//   return head;
// };

// console.log(deleteDuplicates(ll.head));
// console.log(ll.print());

console.log(ll.print());
let a = ll.head;
var deleteDuplicates = function (head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
console.log(deleteDuplicates(a));
console.log(ll.print());

// A function to delete duplicates from a linked list
// function deleteDuplicates(head) {
//   // If the list is empty or has only one node, return it
//   if (head == null || head.next == null) {
//     return head;
//   }

//   // Initialize a pointer to the current node and a set to store the seen values
//   let current = head;
//   let seen = new Set();
//   seen.add(current.val);

//   // Loop through the list while the current node and its next node are not null
//   while (current != null && current.next != null) {
//     // If the next node's value is already in the set, delete it by skipping it
//     if (seen.has(current.next.val)) {
//       current.next = current.next.next;
//     } else {
//       // Otherwise, add the next node's value to the set and move the pointer forward
//       seen.add(current.next.val);
//       current = current.next;
//     }
//   }

//   // Return the modified list
//   return head;
// }

// console.log(deleteDuplicates(ll.head));
// console.log(ll.print());
