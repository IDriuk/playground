/*
  366. Find Leaves of Binary Tree
  Given a binary tree, collect a tree's nodes as if you were doing this:
  Collect and remove all leaves, repeat until the tree is empty.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function findLeaves(treeAr: number[]) {
  let root: TreeNode | null = arrayToTree(treeAr);

  let res: number[][] = [];
  getHeight(root, res);
  return res;
}

function getHeight(node: TreeNode | null, res: number[][]): number {
  if (null == node) {
    return -1;
  }
  let height =
    1 + Math.max(getHeight(node.left, res), getHeight(node.right, res));
  if (res.length == height) {
    res.push([]);
  }
  res[height].push(node.val);
  return height;
}
