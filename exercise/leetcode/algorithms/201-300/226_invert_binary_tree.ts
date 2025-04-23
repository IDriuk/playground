/*
  226. Invert Binary Tree
  Invert a binary tree.
*/

import { TreeNode, arrayToTree, treeToArray } from "../1-100";

export function invertBinaryTree(treeAr: number[]) {
  let root = arrayToTree(treeAr);
  return treeToArray(invert(root));
}

function invert(root: TreeNode | null) {
  if (root == null) {
    return null;
  }

  let right = invert(root.right);
  let left = invert(root.left);

  root.left = right;
  root.right = left;

  return root;
}
