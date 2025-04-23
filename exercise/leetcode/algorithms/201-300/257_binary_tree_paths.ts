/*
  257. Binary Tree Paths
  Given a binary tree, return all root-to-leaf paths.
  Note:
  A leaf is a node with no children.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function binaryTreePaths(treeAr: (number | null)[]) {
  let paths: string[] = [];
  let root = arrayToTree(treeAr);
  backtrack(root!, Array<number>(), paths);
  return paths;
}

function backtrack(root: TreeNode, path: number[], paths: string[]) {
  if (root == null) {
    return;
  }
  if (root.left == null && root.right == null) {
    path = [...path, root.val];
    paths.push(path.join("->"));
    return;
  }
  path.push(root.val);
  backtrack(root.left!, path, paths);
  backtrack(root.right!, path, paths);
  path.pop();
}
