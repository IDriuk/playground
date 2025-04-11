/*
  270. Closest Binary Search Tree Value
  Given a non-empty binary search tree and a target value,
  find the value in the BST that is closest to the target.

  Note:
  Given target value is a floating point.
  You are guaranteed to have only one unique value in the BST that is closest to the target.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function closestBSTValue(treeAr: number[], target: number) {
  let root: TreeNode = arrayToTree(treeAr)!;
  return closest(root, target);
}

function closest(root: TreeNode, target: number) {
  let a = root.val;
  let child = target < a ? root.left : root.right;
  if (child == null) {
    return a;
  }
  let b: number = closest(child, target);
  return Math.abs(a - target) < Math.abs(b - target) ? a : b;
}
