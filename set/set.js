const set = new Set([1, 2, 3]);

set.add(4);
set.add(2);
set.add(4);
for (let item of set) {
  console.log(item);
}
console.log(set);

// list of all the main method
// .add(val)
// .has(val)
// .clear()  -> remove all th elements from the map
// .delete(val)
// .size

const set1 = new Set([1, 2, 3]);

// Access the elements of the Set
const iterator = set1.values();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3

// Check if a value exists
console.log(set1.has(2)); // true
console.log(set1.has(4)); // false

// Create a new set using Set() constructor
let myset = new Set();

// Append new elements to the
// set using add() method
myset.add(23);
myset.add(12);

// Print the modified set
console.log(myset);

// As the set has 2 elements,
// it will return 2.
console.log(myset.size);

let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}
