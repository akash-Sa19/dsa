class MaxHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.getParentIndex(index) >= 0 &&
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  removeMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largestChildIndex = this.getLeftChildIndex(index);

      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] > this.heap[largestChildIndex]
      ) {
        largestChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[largestChildIndex]) {
        break;
      }
      this.swap(index, largestChildIndex);
      index = largestChildIndex;
    }
  }

  getMax() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(50);
maxHeap.insert(60);

console.log(maxHeap.getMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());

console.log(maxHeap.getMax());
