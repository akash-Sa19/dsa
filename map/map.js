const map = new Map([
  [1, "0"],
  [2, "1"],
  [1, "2"],
]);
console.log(map.has(1));
// console.log(map.has("a"));

map.set("c", 3);
// map.delete("c");
console.log(map.has("c"));
console.log(map.size);

for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}

console.log(map.size);
let itObj = map.entries();

console.log(itObj);

map.forEach((val, key) => {
  console.log(key, val);
});

// list of all the main method
// .has("key")
// .get("key")
// .set("key", "val")
// .delete("key")
// .clear()  -> remove all th elements from the map
// .size()
const map2 = new Map();
map2.set("a", 3);
map2.set("b", 2);
map2.set("c", 1);
console.log(map2);

console.log([...map2.entries()]);
console.log([...map2.values()]);
console.log([...map2.keys()]);
