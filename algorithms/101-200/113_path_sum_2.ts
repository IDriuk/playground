/*
  113. Path Sum II
  Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
  Note: A leaf is a node with no children.
*/

import { TreeNode, arrayToTree } from "../1-100";

function has(
  root: TreeNode | null,
  sum: number,
  path: number[],
  res: number[][],
) {
  if (root == null) {
    return;
  }

  sum -= root.val;

  if (root.left == null && root.right == null && sum == 0) {
    path.push(root.val);
    res.push([...path]);
    path.pop();
    return;
  }

  path.push(root.val);
  has(root.left, sum, path, res);
  has(root.right, sum, path, res);
  path.pop();
  return;
}

export function hasPathSum2(
  treeAr: (number | null)[],
  sum: number,
): number[][] {
  let root = arrayToTree(treeAr);
  let res: number[][] = [];
  if (root == null) {
    return res;
  }

  has(root, sum, [], res);

  return res;
}
