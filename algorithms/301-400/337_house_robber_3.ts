/*
  337. House Robber III
  The thief has found himself a new place for his thievery again.
  There is only one entrance to this area, called the "root".
  Besides the root, each house has one and only one parent house.
  After a tour, the smart thief realized that "all houses in this place forms a binary tree".
  It will automatically contact the police if two directly-linked houses were broken into on the same night.
  Determine the maximum amount of money the thief can rob tonight without alerting the police.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function houseRobber3(treeAr: (number | null)[]) {
  let root: TreeNode = arrayToTree(treeAr)!;
  let res: number[] = dfs(root);
  return Math.max(res[0], res[1]);
}

function dfs(node: TreeNode): number[] {
  if (node == null) {
    return [0, 0];
  }
  let res = [];
  let left = dfs(node.left!);
  let right = dfs(node.right!);
  res[0] = node.val + left[1] + right[1];
  res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return res;
}
