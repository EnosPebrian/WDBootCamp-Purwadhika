class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

function DepthFirstSearch(root) {
  if (root == null) return [];
  const leftvalue = DepthFirstSearch(root.left);
  const rightvalue = DepthFirstSearch(root.right);
  return [root.val, ...leftvalue, ...rightvalue];
}

console.log(DepthFirstSearch(node1));
