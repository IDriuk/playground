/*
  102. Binary Tree Level Order Traversal
  Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
*/

import {
  arrayToTree,
  TreeNode,
} from "../1-100/94_binary_tree_inorder_traversal";

export function binaryTreeLevelOrder(treeAr: (number | null)[]): number[][] {
  let res: number[][] = [];
  let root: TreeNode | null = arrayToTree(treeAr);
  let q = [root];

  while (q.length > 0) {
    let level: number[] = [];
    for (let i = q.length - 1; i >= 0; i--) {
      let node = q.shift();
      if (node == null) {
        continue;
      }
      level.push(node.val);
      q.push(node.left);
      q.push(node.right);
    }
    if (level.length) {
      res.push(level);
    }
  }

  return res;
}
