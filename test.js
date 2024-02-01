// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }
// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(val) {
//     const node = new Node(val);
//     if (this.size === 0) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//     return this.size - 1;
//   }
//   append(val) {
//     const node = new Node(val);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = node;
//     }
//     this.size++;
//     return this.size - 1;
//   }
//   print() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let str = "";
//       let curr = this.head;
//       while (curr) {
//         console.log(curr.value);
//         str += curr.value + " ";
//         curr = curr.next;
//       }
//       return str;
//     }
//   }
//   insert(value, index) {
//     if (index === 0) {
//       return this.prepend(value);
//     } else if (index === this.size) {
//       return this.append(value);
//     } else if (index < 0 || index > this.size) {
//       return null;
//     } else {
//       let node = new Node(value);
//       let curr = this.head.next;
//       let i = 1;
//       while (i !== index - 1) {
//         console.log(i);
//         i++;
//         curr = curr.next;
//       }
//       if (curr) {
//         node.next = curr.next;
//         curr.next = node;
//         this.size++;
//       }
//     }
//   }
//   remove(val) {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let curr = this.head;
//       while (curr.next.value !== val) {
//         curr = curr.next;
//       }
//       if (curr) {
//         // let removedNode =  curr.next
//         curr.next = curr.next.next;
//       }
//     }
//   }
//   search(val) {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let curr = this.head;
//       let i = 0;
//       while (curr.value !== val) {
//         i++;
//         curr = curr.next;
//       }
//       if (curr) {
//         return i;
//       }
//     }
//   }
//   reverse() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let curr = this.head;
//       let prev = null;
//       while (curr) {
//         let nextNode = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = nextNode;
//       }
//       this.head = prev;
//       return this.print();
//     }
//   }
// }

// let ll = new linkedList();
// console.log(ll.prepend(10));
// console.log(ll.prepend(20));
// console.log(ll.prepend(30));
// console.log(ll.prepend(40));
// console.log(ll.prepend(50));
// console.log(ll.append(60));

// console.log(ll.getSize());

// console.log(ll.print());
// ll.insert(70, 2);
// console.log(ll.print());
// ll.insert(80, 5);
// console.log(ll.print());
// ll.remove(80);
// console.log(ll.print());
// ll.remove(10);
// console.log(ll.print());
// ll.reverse();
// console.log(ll.print());

// console.log(ll.search(60));

// remover Duplicates from sorted Array

// let arr = [5,8,6,4,44,2]
let arr = [1, 3];
let arr1 = [2, 4];

console.log(arr.sort((a, b) => a - b));
console.log(arr1.concat(arr).sort((a, b) => a - b));

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let len = arr.length;
  if (len % 2 === 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  } else {
    return arr[Math.floor(len / 2)];
  }
};

let app = findMedianSortedArrays(arr, arr1);
console.log(app);
console.log(8 % 2);
