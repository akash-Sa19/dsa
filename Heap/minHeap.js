// pratice implementation of min

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getTheRightChildIndex(index) {
    return 2 * index + 2;
  }
  getTheLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getTheParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  swapIndex(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getTheParentIndex(index) >= 0 &&
      this.heap[this.getTheParentIndex(index)] > this.heap[index]
    ) {
      this.swapIndex(index, this.getTheParentIndex(index));
      index = this.getTheParentIndex(index);
    }
  }
  removeMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length == 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let index = 0;
    while (this.getTheLeftChildIndex(index) < this.heap.length) {
      let smallestChildIndex = this.getTheLeftChildIndex(index);

      if (
        this.getTheRightChildIndex(index) < this.heap.length &&
        this.heap[this.getTheRightChildIndex(index)] <
          this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = this.getTheRightChildIndex(index);
      }

      if (this.heap[index] <= this.heap[smallestChildIndex]) {
        break;
      }
      this.swapIndex(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }
  getMin() {
    if (this.heap.length == 0) {
      return null;
    }
    return this.heap[0];
  }
  isEmpty() {
    return this.heap.length == 0;
  }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);

console.log(minHeap.getMin());
console.log(minHeap.removeMin());
console.log(minHeap.getMin());
console.log(minHeap.insert(7));
console.log(minHeap.getMin());

var kClosest = function (points, k) {
  let minHeap = new MinHeap();
  let distanceMap = {};

  for (let point of points) {
    let dist = findDistance(point);
    if (distanceMap[dist]) {
    }
    distanceMap[dist] = point;
    minHeap.insert(dist);
  }

  let res = [];
  for (let i = 0; i < k; i++) {
    let dist = minHeap.removeMin();
    res.push(distanceMap[dist]);
  }
  console.log(distanceMap);

  return res;
};

function findDistance(point) {
  let [x, y] = point;
  return Math.sqrt(x ** 2 + y ** 2);
}

console.log(
  kClosest(
    [
      [0, 1],
      [1, 0],
    ],
    2
  )
);
