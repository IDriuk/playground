/*
  333. Largest BST Subtree
  Given a binary tree, find the largest subtree which is a Binary Search Tree (BST),
  where largest means subtree with largest number of nodes in it.
  Note: 
  A subtree must include all of its descendants.
*/

import { TreeNode, arrayToTree } from "../1-100";

class Result {
  constructor(
    public size: number = 0,
    public lower: number = Infinity,
    public upper: number = -Infinity,
  ) {}
}

export function largestBSTSubtree(treeAr: (number | null)[]) {
  let root = arrayToTree(treeAr);
  if (root == null) {
    return 0;
  }
  let max = 0;
  traverse(root);

  function traverse(root: TreeNode | null): Result {
    if (root == null) {
      return new Result();
    }
    let left = traverse(root.left)!;
    let right = traverse(root.right)!;
    if (
      left.size == -1 ||
      right.size == -1 ||
      root.val <= left.upper ||
      root.val >= right.lower
    ) {
      return new Result(-1, 0, 0);
    }
    let size = left.size + 1 + right.size;
    max = Math.max(size, max);
    return new Result(
      size,
      Math.min(left.lower, root.val),
      Math.max(right.upper, root.val),
    );
  }
  return max;
}
