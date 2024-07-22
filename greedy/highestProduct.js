// Give an array of n intergers, find the higest product by multiplying 3 elements

function higestProduct(arr) {
  arr.sort((a, b) => a - b);
  let arrL = arr.length;
  let frontProduct = arr[0] * arr[1] * arr[arrL - 1];
  let backProduct = arr[arrL - 1] * arr[arrL - 2] * arr[arrL - 3];

  return Math.max(frontProduct, backProduct);
}
let arr = [-5, -2, -1, 0, 0, 1, 1, 5];
console.log(higestProduct(arr));
