/*
  298. Binary Tree Longest Consecutive Sequence
  Given a binary tree, find the length of the longest consecutive sequence path.

  The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
  The longest consecutive path need to be from parent to child (cannot be the reverse).
*/

import { TreeNode, arrayToTree } from "../1-100";

export function longestConsecutive(treeAr: (number | null)[]) {
  let maxLength = 0;
  let root: TreeNode = arrayToTree(treeAr)!;

  let dfs = (p: TreeNode | null, parent: TreeNode | null, length: number) => {
    if (p == null) {
      return;
    }
    length = parent != null && p.val == parent.val + 1 ? length + 1 : 1;
    maxLength = Math.max(maxLength, length);
    dfs(p.left, p, length);
    dfs(p.right, p, length);
  };
  dfs(root, null, 0);

  return maxLength;
}
