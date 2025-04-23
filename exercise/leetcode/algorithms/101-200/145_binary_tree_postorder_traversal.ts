/*
  145. Binary Tree Postorder Traversal
  Given a binary tree, return the postorder traversal of its nodes' values.
*/

import {
  TreeNode,
  arrayToTree,
} from "../1-100/94_binary_tree_inorder_traversal";

export function treePostorderTraversal(treeAr: (number | null)[]): number[] {
  let root = arrayToTree(treeAr);
  let res: number[] = [];
  if (root == null) {
    return res;
  }

  let s = [root];
  let prev: TreeNode | null = null;
  let cur: TreeNode | null = root;
  while (s.length > 0) {
    cur = s[s.length - 1];
    if (
      prev == null ||
      (prev as TreeNode).left == cur ||
      (prev as TreeNode).right == cur
    ) {
      if (cur.left != null) {
        s.push(cur.left);
      } else if (cur.right != null) {
        s.push(cur.right);
      }
    } else if (cur.left == prev) {
      if (cur.right != null) {
        s.push(cur.right);
      }
    } else {
      res.push(cur.val);
      s.pop();
    }
    prev = cur;
  }

  return res;
}
