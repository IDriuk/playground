/*
  124. Binary Tree Maximum Path Sum
  Given a non-empty binary tree, find the maximum path sum.

  For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
  The path must contain at least one node and does not need to go through the root.
*/
import { TreeNode, arrayToTree } from "../1-100";

export function maxPathSum(treeAr: (number | null)[]): number {
  let root = arrayToTree(treeAr);
  if (root == null) {
    return 0;
  }
  let max = root.val;

  function helper(root: TreeNode | null): number {
    if (root == null) {
      return 0;
    }
    let left = helper(root.left);
    let right = helper(root.right);

    let curMax = Math.max(root.val, Math.max(left, right) + root.val);
    max = Math.max(max, Math.max(curMax, left + right + root.val));
    return curMax;
  }

  helper(root);
  return max;
}
