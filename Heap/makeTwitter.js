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
      index > 0 &&
      this.heap[this.getParentIndex(index)][0] < this.heap[index][0]
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
        this.heap[this.getRightChildIndex(index)][0] >
          this.heap[largestChildIndex][0]
      ) {
        largestChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index][0] > this.heap[largestChildIndex][0]) {
        break;
      }
      this.swap(index, largestChildIndex);
      index = largestChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }
}

class Twitter {
  constructor() {
    this.time = 0;
    this.tweets = new Map(); // Maps userId to list of [time, tweetId]
    this.following = new Map(); // Maps followerId to a set of followeeIds
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.tweets.has(userId)) {
      this.tweets.set(userId, []);
    }
    this.tweets.get(userId).push([this.time++, tweetId]);
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const maxHeap = new MaxHeap();
    const followees = this.following.get(userId) || new Set();
    followees.add(userId); // Include the user's own tweets

    for (let followeeId of followees) {
      const userTweets = this.tweets.get(followeeId) || [];
      for (let tweet of userTweets) {
        console.log(tweet);
        maxHeap.insert(tweet);
        if (maxHeap.size() > 10) {
          maxHeap.removeMax();
        }
      }
    }

    const newsFeed = [];
    while (maxHeap.size() > 0) {
      newsFeed.push(maxHeap.removeMax()[1]);
    }
    return newsFeed.reverse();
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (!this.following.has(followerId)) {
      this.following.set(followerId, new Set());
    }
    this.following.get(followerId).add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (this.following.has(followerId)) {
      this.following.get(followerId).delete(followeeId);
    }
  }
}

const t = new Twitter();
t.postTweet(1, 5);
console.log(t.getNewsFeed(1))
t.follow(1,2)
t.postTweet(2,6)
console.log(t.getNewsFeed(1))
