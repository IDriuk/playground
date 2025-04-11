/*
  129. Sum Root to Leaf Numbers
  Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
  An example is the root-to-leaf path 1->2->3 which represents the number 123.
  Find the total sum of all root-to-leaf numbers.
  Note: A leaf is a node with no children.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function rootToLeafSum(treeAr: (number | null)[]): number {
  let root = arrayToTree(treeAr);
  let res = 0;
  if (root == null) {
    return res;
  }
  return helper(root, 0);
}

function helper(root: TreeNode, x: number): number {
  if (root.left == null && root.right == null) {
    return 10 * x + root.val;
  }

  let val = 0;
  if (root.left != null) {
    val += helper(root.left, 10 * x + root.val);
  }
  if (root.right != null) {
    val += helper(root.right, 10 * x + root.val);
  }
  return val;
}
