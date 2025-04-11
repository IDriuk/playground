/*
  114. Flatten Binary Tree to Linked List.
  Given a binary tree, flatten it to a linked list in-place.
  For example , given the following tree:
     1
   2   5
  3   4 6

  The flattened tree should look like:
  1
   2
    3
     4
      5
       6
*/

import { TreeNode, arrayToTree } from "../1-100";

export function flattenTree(treeAr: (number | null)[]): number[] {
  let root = arrayToTree(treeAr);
  if (!root) {
    return [];
  }
  let head: TreeNode | null = root;

  while (root != null) {
    if (root.left != null) {
      let n = root.left;
      while (n.right != null) {
        n = n.right;
      }
      n.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    root = root.right;
  }

  let res = [];
  while (head) {
    res.push(head.val);
    head = head.right;
  }

  return res;
}
