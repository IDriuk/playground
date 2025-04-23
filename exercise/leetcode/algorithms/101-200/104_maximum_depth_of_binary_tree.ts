/*
  104. Maximum Depth of Binary Tree
  Given a binary tree, find its maximum depth.
  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  Note: A leaf is a node with no children
*/

import { TreeNode, arrayToTree } from "../1-100";

export function maxDepth(treeAr: (number | null)[]): number {
  return depth(arrayToTree(treeAr));
}

function depth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  return Math.max(depth(root.left!), depth(root.right!)) + 1;
}
