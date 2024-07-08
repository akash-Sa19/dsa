const arr = [10, 20, 30, 40];
console.log(arr.indexOf(10));
console.log(arr.splice(0, 2));
console.log(arr);

for (let i in arr) {
  console.log(i);
}
for (let i of arr) {
  console.log(i);
}

const res = new Array(3);
console.log(res);
