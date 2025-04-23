/*
  106. Construct Binary Tree from Inorder and Postorder Traversal
  Given inorder and postorder traversal of a tree, construct the binary tree.
  Note: You may assume that duplicates do not exist in the tree.
*/

import { TreeNode, treeToArray } from "../1-100";

export function treeFromInorderPostorder(
  inorder: number[],
  postorder: number[],
): (number | null)[] | null {
  if (inorder == null || postorder == null) {
    return null;
  }
  return treeToArray(
    dfs(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1),
  );
}

function dfs(
  inorder: number[],
  postorder: number[],
  is: number,
  ie: number,
  ps: number,
  pe: number,
): TreeNode | null {
  if (ps > pe) {
    return null;
  }

  let root = new TreeNode(postorder[pe]);
  let pos = is;
  for (; pos <= ie; pos++) {
    if (inorder[pos] == root.val) {
      break;
    }
  }

  root.left = dfs(inorder, postorder, is, pos - 1, ps, ps - is - 1 + pos);
  root.right = dfs(inorder, postorder, pos + 1, ie, pe - ie + pos, pe - 1);
  return root;
}
