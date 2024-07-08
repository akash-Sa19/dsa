class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

// Example usage:
const root = new Node(1);
root.children.push(new Node(2));
root.children.push(new Node(3));
root.children[0].children.push(new Node(4));
root.children[0].children.push(new Node(5));

// Traversing the tree:
function traverse(node) {
  console.log(node.data);
  for (const child of node.children) {
    traverse(child);
  }
}

traverse(root);

var preorder = function (root, res = []) {
  if (!root) return;
  res.push(root.val);

  for (let i = 0; i < root.children.length; i++) {
    preorder(root.children[i], res);
  }
  return res;
};

var postorder = function (root, res = []) {
  if (!root) return [];
  if (root.children.length > 0) {
    for (let i = 0; i < root.children.length; i++) {
      postorder(root.children[i], res);
    }
  }
  res.push(root.val);
  return res;
};
