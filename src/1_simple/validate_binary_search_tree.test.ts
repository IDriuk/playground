// Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// https://leetcode.com/problems/validate-binary-search-tree/
// connect: undefined

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function isValidBST(root: TreeNode | null): boolean {
  let res = true;

  function validate(node: TreeNode | null, min: number = -Infinity, max: number = Infinity): void {
    if (!node) return;

    if (node.val <= min || node.val >= max) {
      res = false;
      return;
    }

    validate(node.left, min, node.val);
    validate(node.right, node.val, max);
  }

  validate(root);
  return res;
}

describe('isValidBST', () => {
  it('returns true for valid BST', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);

    expect(isValidBST(root)).toBe(true);
  });

  it('returns false for invalid BST (left child too big)', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(6); // invalid
    root.right = new TreeNode(7);

    expect(isValidBST(root)).toBe(false);
  });

  it('returns false for invalid BST (right child too small)', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4); // invalid because 4 < 5, but must be > all left

    expect(isValidBST(root)).toBe(false);
  });

  it('returns true for single node', () => {
    const root = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  it('returns true for null tree', () => {
    expect(isValidBST(null)).toBe(true);
  });

  it('returns false for subtree violation', () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.right.left = new TreeNode(6); // violates the BST rule
    root.right.right = new TreeNode(20);

    expect(isValidBST(root)).toBe(false);
  });
});
