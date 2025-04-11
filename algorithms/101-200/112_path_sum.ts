/*
  112. Path Sum
  Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
  Note: A leaf is a node with no children.
*/

import { TreeNode, arrayToTree } from "../1-100";

function has(root: TreeNode | null, sum: number): boolean {
  if (root == null) {
    return false;
  }

  sum -= root.val;

  return (
    (root.left == null && root.right == null && sum == 0) ||
    has(root.left, sum) ||
    has(root.right, sum)
  );
}

export function hasPathSum(treeAr: (number | null)[], sum: number): boolean {
  let root = arrayToTree(treeAr);
  if (!root) {
    return false;
  }

  return has(root, sum);
}
