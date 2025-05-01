/*
  404. Sum of Left Leaves
  Find the sum of all left leaves in a given binary tree.
*/

import {
  TreeNode,
  arrayToTree,
} from "../1-100/94_binary_tree_inorder_traversal";

export function sumOfLeftLeaves(treeAr: (number | null)[]) {
  let root = arrayToTree(treeAr);
  return dfs(root);
}

function dfs(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  let sum = 0;
  if (root.left != null && root.left.left == null && root.left.right == null) {
    sum += root.left.val;
  } else {
    sum += dfs(root.left);
  }
  sum += dfs(root.right);
  return sum;
}
