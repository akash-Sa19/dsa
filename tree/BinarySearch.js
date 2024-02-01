function Binarysearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    // console.log(leftIndex);
    // console.log(rightIndex);
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log(middleIndex);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
      //   console.log(rightIndex);
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
console.log(Binarysearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
// Big-O -> O(logn)

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (target === arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}
function RecursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

console.log(RecursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

// bigO -> N O(log n)
