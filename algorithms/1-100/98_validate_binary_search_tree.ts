/*
  98. Validate Binary Search Tree
  Given a binary tree, determine if it is a valid binary search tree (BST).

  Assume a BST is defined as follows:
  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.
*/
import { TreeNode, arrayToTree } from "./94_binary_tree_inorder_traversal";

function isValid(root: TreeNode | null): boolean {
  if (root == null) {
    return true;
  }

  let temp: TreeNode | null = null;

  if (root.left != null) {
    temp = root.left;
    while (temp.right != null) {
      temp = temp.right;
    }
    if (temp.val >= root.val) {
      return false;
    }
  }

  if (root.right != null) {
    temp = root.right;
    while (temp.left != null) {
      temp = temp.left;
    }
    if (temp.val <= root.val) {
      return false;
    }
  }

  return isValid(root.left) && isValid(root.right);
}

export function isValidBST(treeAr: (number | null)[]): boolean {
  return isValid(arrayToTree(treeAr));
}
