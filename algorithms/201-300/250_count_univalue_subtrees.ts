/*
  250. Count Univalue Subtrees

  Given a binary tree, count the number of uni-value subtrees.

  A Uni-value subtree means all nodes of the subtree have the same value.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function countUnivalSubtrees(treeAr: (number | null)[]) {
  let count = [0];
  let root = arrayToTree(treeAr);
  helper(root!, count);
  return count[0];
}

function helper(node: TreeNode, count: number[]) {
  if (node == null) {
    return true;
  }

  let left = helper(node.left!, count);
  let right = helper(node.right!, count);
  if (left && right) {
    if (node.left != null && node.val != node.left.val) {
      return false;
    }
    if (node.right != null && node.val != node.right.val) {
      return false;
    }
    count[0]++;
    return true;
  }

  return false;
}
