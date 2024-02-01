// Bubble Sort
let arr = [-6, 20, 8, -2, 4];
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));
// console.log(arr.sort());

function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      // By changing the greater than operator to less than operator
      // we can change ascending order to desending order
      if (arr[i] > arr[i + 1]) {
        //   console.log(arr[i]);
        //   console.log(arr[i + 1]);
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// my solution
// function BubbleSort(arr) {
//   for (let j = 1; j < arr.length; j++) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         //   console.log(arr[i]);
//         //   console.log(arr[i + 1]);
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   }
//   return arr;
// }
// console.log(BubbleSort(arr));
// Big-O -> Quadratic Runtime -> O(n^2)

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1; //sorted part
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
// console.log(InsertionSort(arr));

// bigO -> Object(n^N2)

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot < arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
}

// console.log(QuickSort(arr));

// worst time -> O(n^2) -> this happens when the array is already sorted
// beacuse we are taking pivot the last element of the array and we end up making a empty array and a full array, and end up comparing each of them

// average tiem -> O(n logn)

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let temp = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }
  return [...temp, ...left, ...right];
}

console.log(mergeSort(arr));

// BigO -> O(nlogn)
