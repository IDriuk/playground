/*
  230. Kth Smallest Element in a BST
  Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function kthSmallest(treeAr: (number | null)[], k: number) {
  let count = k;
  let root = arrayToTree(treeAr);
  let res;

  let traverse = (node: TreeNode | null) => {
    if (node?.left != null) {
      traverse(node.left);
    }
    count--;
    if (count == 0) {
      res = node?.val;
      return;
    }
    if (node?.right != null) {
      traverse(node.right);
    }
  };
  traverse(root);

  return res;
}
