/*
  111. Minimum Depth of Binary Tree
  Given a binary tree, find its minimum depth.
  The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

import { TreeNode, arrayToTree } from "../1-100";

function minDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left == 0) {
    return right + 1;
  }
  if (right == 0) {
    return left + 1;
  }
  return Math.min(left, right) + 1;
}

export function treeMinDepth(treeAr: (number | null)[]): number {
  if (!treeAr || treeAr.length == 0) {
    return 0;
  }
  return minDepth(arrayToTree(treeAr));
}
