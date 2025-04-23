/* 
  101. Symmetric Tree
  Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
*/

import {
  arrayToTree,
  TreeNode,
} from "../1-100/94_binary_tree_inorder_traversal";

function symmetricTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null || q == null) {
    return p == q;
  }
  return (
    p.val == q.val &&
    symmetricTree(p.right, q.left) &&
    symmetricTree(p.left, q.right)
  );
}

export function isSymmetricTree(treeAr: (number | null)[]): boolean {
  let root = arrayToTree(treeAr);
  return symmetricTree(root, root);
}
