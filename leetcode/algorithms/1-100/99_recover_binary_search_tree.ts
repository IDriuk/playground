/*
  99. Recover Binary Search Tree
  Two elements of a binary search tree (BST) are swapped by mistake.
  Recover the tree without changing its structure.
*/

import {
  TreeNode,
  arrayToTree,
  treeToArray,
} from "./94_binary_tree_inorder_traversal";

export function recoverBST(treeAr: (number | null)[]): (number | null)[] {
  let root = arrayToTree(treeAr);
  if (root == null) {
    return [];
  }

  let first: TreeNode | null = null;
  let second: TreeNode | null = null;

  let prev: TreeNode | null = new TreeNode(-Infinity);
  let cur: TreeNode | null = root;
  let pred: TreeNode | null = null;

  while (cur != null) {
    if (cur.left == null) {
      if (cur.val <= prev!.val && first == null) {
        first = prev;
      }
      if (cur.val <= prev!.val && first != null) {
        second = cur;
      }
      prev = cur;
      cur = cur.right;
    } else {
      pred = cur.left;
      while (pred.right != null && pred.right != cur) {
        pred = pred.right;
      }
      if (pred.right == null) {
        pred.right = cur;
        cur = cur.left;
      } else {
        if (cur.val <= prev!.val && first == null) {
          first = prev;
        }
        if (cur.val <= prev!.val && first != null) {
          second = cur;
        }
        pred.right = null;
        prev = cur;
        cur = cur.right;
      }
    }
  }
  let t = first!.val;
  first!.val = second!.val;
  second!.val = t;

  return treeToArray(root);
}
