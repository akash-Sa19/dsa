let arr = [-6, 20, 8, -2, 4];
let arr1 = [-6, 20];
let arr2 = [12, 3];

// Cartesion product
// Problem -> Given top finit non-empty sets, find their cartesian Product

function cartesionProduct(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      temp.push([arr1[i], arr2[j]]);
    }
  }
  return temp;
}
// console.log(cartesionProduct(arr1, arr2));n
// bigO - O(n^2)

// climbing staircase problem
// Problem - Given a staircase of "n" steps, count the number of distint ways to climb to the top. you can either climb 1 step or 2 steps at a time.

const climbingStaircase = (n) => {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n];
};

console.log(climbingStaircase(5));
console.log(climbingStaircase(4));
console.log(climbingStaircase(3));
console.log(climbingStaircase(2));

// A Javascript program to count
// number of ways to reach
// n'th stair when a person
// can climb 1, 2, ..m stairs
// at a time.

// A simple recursive
// function to find n'th
// fibonacci number
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Returns number of
// ways to reach s'th stair
function countWays(s) {
  return fib(s + 1);
}

// Driver Code
let s = 3;
console.log(countWays(s));

// This code is contributed
// by _saurabh_jaiswal geeksofgeeks

// tower of Hanoi
// The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
// 1 only one disk may be moved at a time
// 2 Each move consists of atking the upper disk from one of theh stacks and placing it on the top of another stack or on a empty rod, and lastly
// 3 No disk may be placed on top of disk that is smaller

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// towerOfHanoi(3, "A", "B", "C")

let ar = [1, 2, 3, 4, 5];
ar.unshift(90);
console.log(ar);
ar.shift(90);
console.log(ar);
ar.push(80);
console.log(ar);
ar.pop(80);
console.log(ar);

for (let apple of ar) {
  console.log(apple + 80);
}
console.log(ar.slice(0, 3));
console.log(ar);
console.log(ar.concat(arr));

ar.forEach((ap) => {
  console.log(ap + 34);
});

let apple = ar.reduce((total, item, index) => {
  // console.log(`total : ${total}`);
  // console.log(`item : ${item}`);
  console.log(index);
  return (total += item);
}, 0);
console.log(apple);

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const result = people.reduce((gp, person) => {
  let age = person.age;
  // console.log(person.age);
  // console.log(gp);
  if (gp[age] == null) gp[age] = [];
  // console.log(gp);
  gp[age].push(person.name);
  return gp;
}, {});

// console.log(result);

const p = {
  fname: "Akash",
  lname: "Sahu",
  age: "21",
};
p.hobbie = "football";
delete p.hobbie;
// console.log(Object.keys(p));
// console.log(Object.values(p));
// console.log(Object.entries(p));

const set = new Set([1, 2, 3]);

set.add(4);
set.add(2);
set.add(4);
for (let item of set) {
  // console.log(item);
}
// console.log(set.has(4));
// console.log(set.delete(3));
// console.log(set);

// console.log(set.size);

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);
map.delete("c");
console.log(map.has("c"));
console.log(map.size);

for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}
