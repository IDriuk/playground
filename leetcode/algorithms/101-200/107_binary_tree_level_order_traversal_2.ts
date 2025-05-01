/*
  102. Binary Tree Level Order Traversal II
  Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
  (ie, from left to right, level by level from leaf to root).
*/

import {
  arrayToTree,
  TreeNode,
} from "../1-100/94_binary_tree_inorder_traversal";

export function binaryTreeLevelOrder2(treeAr: (number | null)[]): number[][] {
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
      res.unshift(level);
    }
  }

  return res;
}
