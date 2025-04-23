/*
  103. Binary Tree Zigzag Level Order Traversal
  Given a binary tree, return the zigzag level order traversal of its nodes' values. 
  (ie, from left to right, then right to left for the next level and alternate between).
*/

import {
  arrayToTree,
  TreeNode,
} from "../1-100/94_binary_tree_inorder_traversal";

export function binaryTreeZigzagLevelOrder(
  treeAr: (number | null)[],
): number[][] {
  let res: number[][] = [];
  let root: TreeNode | null = arrayToTree(treeAr);
  let q = [root];
  let toggle = true;

  while (q.length > 0) {
    let level: number[] = [];
    for (let i = q.length - 1; i >= 0; i--) {
      let node = q.shift();
      if (node == null) {
        continue;
      }
      if (toggle) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      q.push(node.left);
      q.push(node.right);
    }
    if (level.length) {
      res.push(level);
    }
    toggle = !toggle;
  }

  return res;
}
