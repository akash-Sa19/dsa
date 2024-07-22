// N kids in a line, each having rating. we distribute candies followings:
// each kid gets at least one candy
// kids with higher ratings than their neighbours get more candies.
// find the minimum number candies required

function candyDistribution(arr) {
  const arrL = arr.length;
  const data = arr.map((x, i) => [x, i]).sort((a, b) => a[0] - b[0]);

  console.log(data);
  const candies = Array(arrL).fill(1);

  for (let [_, i] of data) {
    if (i > 0 && arr[i] > arr[i - 1]) {
      candies[i] = Math.max(candies[i], 1 + candies[i - 1]);
    }
    if (i < arr.length && arr[i] > arr[i + 1]) {
      candies[i] = Math.max(candies[i], 1 + candies[i + 1]);
    }
  }
  console.log(candies);
  return candies.reduce((sum, candy) => sum + candy, 0);
}
let A = [1, 5, 2, 1];
console.log(candyDistribution(A));
