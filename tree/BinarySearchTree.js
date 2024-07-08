class Node {
  constructor(value, left, right) {
    this.value = value || null;
    this.left = left || null;
    this.right = right || null;
  }
}
class BinarySearchTree {
  constructor(val) {
    this.root = val || null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // this search method will only work on trees that contain numeric value
  // and doesn't work on tress containg character or string
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  // DFS methods
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // BFS methods
  // levelOrder() {
  //   // use optimized queue for better time complexity
  //   const queue = [];
  //   queue.push(this.root);
  //   while (queue.length) {
  //     let curr = queue.shift();
  //     console.log(curr.value);
  //     if (curr.left) {
  //       queue.push(curr.left);
  //     }
  //     if (curr.right) {
  //       queue.push(curr.right);
  //     }
  //   }
  // }
  // time: O(n)
  // space :O(n)
  // to write a BFS in recursive order is diffcult so, we will not do it
  BFS(root) {
    const queue = [];
    const result = [];
    if (!root) return;

    queue.push(root.value);

    while (queue.length) {
      let curr = queue.shift();
      result.push(curr.value);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return result;
  }

  // other methods
  // this min-mum mehtod will only word for a binary serch tree
  // since BST are sorted (-what if the tree is not sorted)
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  // deleting node
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

// a depth first search method
// free code camp
// preOrder Traversal -> DFS
const depthFirstValues = (root) => {
  if (!root) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    result.push(curr.value);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
};
const depthFirstValueRecursive = (root) => {
  if (!root) return [];
  const leftValues = depthFirstValueRecursive(root.left);
  const rightValues = depthFirstValueRecursive(root.right);

  return [root.value, ...leftValues, ...rightValues];
};
// time: o(n2)
// space: o(n)
const searchForValueUsingBFS = (root, target) => {
  if (!root) return false;
  const queue = [root];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.value === target) return true;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
};
const searchForValueDFS = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return (
    searchForValueDFS(root.left, target) ||
    searchForValueDFS(root.right, target)
  );
};

const findSumWithDFS = (root) => {
  // akash's code
  // let sum = 0;
  // function dfs(root) {
  //   if (!root) return 0;
  //   sum += root.value;
  //   dfs(root.left);
  //   dfs(root.right);
  // }
  // dfs(root)
  // return sum;

  // FreeCodeCamp
  if (!root) return 0;
  return findSumWithDFS(root.right) + findSumWithDFS(root.left) + root.value;
};

const findMinDFS = (root) => {
  if (!root) return Infinity;
  let min = Infinity;
  const stack = [root];

  while (stack.length) {
    curr = stack.pop();
    if (curr.value < min) min = curr.value;

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  console.log(min);
  return min;
};
// time O(n2) -> because the shift method itself will run o(n) time which makes it total O(n * n)
const findMinBFS = (root) => {
  if (!root) return;
  let min = Infinity;
  const queue = [root];

  while (queue.length) {
    curr = queue.shift();
    if (curr.value < min) min = curr.value;

    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  console.log(min);
  return min;
};
const findMinValueRecurssive = (root) => {
  if (!root) return Infinity;

  const leftMin = findMinValueRecurssive(root.left);
  const rightMin = findMinValueRecurssive(root.right);

  return Math.min(root.value, leftMin, rightMin);
};

// time: O(n)
// space: O(n)
// only when tree is not sorted
const largestSumPath = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  const maxChildPathSum = Math.max(
    largestSumPath(root.right),
    largestSumPath(root.left)
  );
  return maxChildPathSum + root.value;
};

// const bst = new Node(3);
// bst.left = new Node(20, 15, 7);
// bst.right = new Node(9);

var levelOrder = function (root) {
  // use BFS to solve this problem
  if (!root) return [];
  if (root && !root.right && !root.left) return [[root.val]];

  const queue = [],
    result = [];
  queue.push(root);
  result.push([root.value]);
  // console.log(queue);
  while (queue.length) {
    let res = [];
    let curr = queue.shift();
    console.log(queue);

    if (curr && curr.right) {
      queue.push(curr.right);
      res.push(curr.right.value);
    }
    if (curr && curr.left) {
      console.log(queue);
      queue.push(curr.left);
      res.push(curr.left.value);
    }

    result.push(res);
  }
  return result;
};

// console.log(bst.isEmpty());
// console.log(bst);
// console.log(levelOrder(bst));

// console.log(bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(depthFirstValues(bst.root));
// console.log(searchForValueUsingBFS(bst.root, 7));
// console.log(findSumWithDFS(bst.root));
// findMinDFS([]); //returns Infinity
// findMinBFS(bst.root);
// console.log(findMinValueRecurssive(bst.root));
// console.log(largestSumPath(bst.root));

// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 25));

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);

// // bst.levelOrder(bst.root);
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.delete(7);
// console.log(bst.search(bst.root, 7));

// console.log(Math.floor(1 / 2));
// console.log(1 > 1);

const bst = new Node(3);
bst.left = new Node(1, null, 2);
bst.right = new Node(4);

console.log(bst);

var kthSmallest = function (root, k) {
  // console.log(root);
  const arr = [];
  const traverse = function (node) {
    if (!node) return;

    traverse(node.left);
    arr.push(node.value);
    traverse(node.right);
  };
  traverse(root);
  console.log(arr);
  return arr[k - 1];
};
console.log(kthSmallest(bst, 2));
