/*
  156. Binary Tree Upside Down
  Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty,
  flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.
*/

import { TreeNode, arrayToTree, treeToArray } from "../1-100";

export function upsideDownBinaryTree(ar: (number | null)[]): (number | null)[] {
  let root: TreeNode | null = arrayToTree(ar);
  if (root == null) {
    return [];
  }
  let newRoot = upsideDown(root);
  return treeToArray(newRoot);
}

function upsideDown(root: TreeNode): TreeNode {
  if (root == null || (root.left == null && root.right == null)) {
    return root;
  }

  let newRoot: TreeNode = upsideDown(root.left!);
  root.left!.left = root.right;
  root.left!.right = root;
  root.left = null;
  root.right = null;

  return newRoot;
}
