/*
  110. Balanced Binary Tree
  Given a binary tree, determine if it is height-balanced.
  For this problem, a height-balanced binary tree is defined as:
  a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

import { TreeNode, arrayToTree } from "../1-100";

function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
}

export function balancedBinaryTree(treeAr: (number | null)[]): boolean {
  return maxDepth(arrayToTree(treeAr)) != -1;
}
