/*
  235. Lowest Common Ancestor of a Binary Search Tree
  Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
  According to the definition of LCA of two given nodes in the BST.
*/

import { arrayToTree } from "../1-100";

export function lowestCommonAncestor(
  treeAr: (number | null)[],
  p: number,
  q: number,
): number | null {
  let root = arrayToTree(treeAr);
  while (root != null) {
    if (root.val < p && root.val < q) {
      root = root.right;
    } else if (root.val > p && root.val > q) {
      root = root.left;
    } else {
      return root.val;
    }
  }
  return null;
}
