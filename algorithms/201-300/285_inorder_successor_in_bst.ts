/*
  285. Inorder Successor in BST
  Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
  Note: 
  If the given node has no in-order successor in the tree, return null.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function inorderSuccessorBST(treeAr: (number | null)[], p: number) {
  let root: TreeNode | null = arrayToTree(treeAr);
  function find(root: TreeNode | null, p: number): TreeNode | null {
    if (root == null) {
      return null;
    }
    if (p < root.val) {
      let succ: TreeNode | null = find(root.left, p);
      return succ == null ? root : succ;
    } else {
      return find(root.right, p);
    }
  }
  return find(root, p)?.val || null;
}
