// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
// connect: tree, interesting

import TreeNode from "../helpers/TreeNode";

function validate(node: TreeNode, min = -Infinity, max = Infinity) {
  if (node.data > max || node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

test('Validate recognizes a valid BST', () => {
  const n = new TreeNode(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new TreeNode(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left!.left!.right = new TreeNode(999);

  expect(validate(n)).toEqual(false);
});