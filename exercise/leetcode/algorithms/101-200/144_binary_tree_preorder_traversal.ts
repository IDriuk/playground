/*
  144. Binary Tree Preorder Traversal
  Given a binary tree, return the preorder traversal of its nodes' values.
*/

import { arrayToTree } from "../1-100/94_binary_tree_inorder_traversal";

export function treePreorderTraversal(treeAr: (number | null)[]): number[] {
  let root = arrayToTree(treeAr);
  let res: number[] = [];
  if (root == null) {
    return res;
  }

  let s = [root];

  while (s.length > 0) {
    let curNode = s.pop();
    res.push(curNode?.val!);
    if (curNode?.right != null) {
      s.push(curNode.right);
    }
    if (curNode?.left != null) {
      s.push(curNode.left);
    }
  }

  return res;
}
