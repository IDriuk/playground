/*
  236. Lowest Common Ancestor of a Binary Tree
  Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function lowestCommonAncestor2(
  treeAr: (number | null)[],
  p: number,
  q: number,
): number | null {
  let root = arrayToTree(treeAr);
  let node = dfs(root!, new TreeNode(p), new TreeNode(q));
  return node ? node.val : null;
}

function dfs(root: TreeNode, p: TreeNode, q: TreeNode) {
  if (root == null || root.val == p.val || root.val == q.val) {
    return root;
  }

  let left: TreeNode = dfs(root.left!, p, q);
  let right: TreeNode = dfs(root.right!, p, q);

  return left == null ? right : right == null ? left : root;
}
