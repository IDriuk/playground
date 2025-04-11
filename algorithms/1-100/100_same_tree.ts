/*
  100. Same Tree
  Given two binary trees, write a function to check if they are the same or not.
  Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/

import { arrayToTree, TreeNode } from "./94_binary_tree_inorder_traversal";

function sameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null || q == null) {
    return p == q;
  }
  return (
    p.val == q.val && sameTree(p.left, q.left) && sameTree(p.right, q.right)
  );
}

export function isSameTree(
  treeAr1: (number | null)[],
  treeAr2: (number | null)[],
): boolean {
  return sameTree(arrayToTree(treeAr1), arrayToTree(treeAr2));
}
