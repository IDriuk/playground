/*
  105. Construct Binary Tree from Preorder and Inorder Traversal
  Given preorder and inorder traversal of a tree, construct the binary tree.
  Note: You may assume that duplicates do not exist in the tree.
*/

import { TreeNode, treeToArray } from "../1-100";

export function treeFromPreorderInorder(
  preorder: number[],
  inorder: number[],
): (number | null)[] {
  if (preorder == null || inorder == null) {
    return [];
  }
  return treeToArray(
    dfs(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1),
  );
}

function dfs(
  preorder: number[],
  inorder: number[],
  ps: number,
  pe: number,
  is: number,
  ie: number,
): TreeNode | null {
  if (ps > pe) {
    return null;
  }

  let pos = is;
  let root = new TreeNode(preorder[ps]);
  for (; pos <= ie; pos++) {
    if (inorder[pos] == preorder[ps]) {
      break;
    }
  }

  root.left = dfs(preorder, inorder, ps + 1, ps - is + pos, is, pos - 1);
  root.right = dfs(preorder, inorder, ps - is + pos + 1, pe, pos + 1, ie);
  return root;
}
