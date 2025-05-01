/*
  272. Closest Binary Search Tree Value II
  Given a non-empty binary search tree and a target value,
  find k values in the BST that are closest to the target.

  Note:
  Given target value is a floating point.
  You may assume k is always valid, that is: k <= total nodes.
  You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
  Follow up:
  Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
*/

import { TreeNode, arrayToTree } from "../1-100";

export function closestBSTValue2(treeAr: number[], target: number, k: number) {
  let root: TreeNode = arrayToTree(treeAr)!;
  let res: number[] = [];
  let s1: number[] = [];
  let s2: number[] = [];

  inorder(root, target, false, s1);
  inorder(root, target, true, s2);

  while (k > 0) {
    if (s1.length == 0) {
      res.push(s2.pop()!);
    } else if (s2.length == 0) {
      res.push(s1.pop()!);
    } else if (Math.abs(s1.at(-1)! - target) < Math.abs(s2.at(-1)! - target)) {
      res.push(s1.pop()!);
    } else {
      res.push(s2.pop()!);
    }
    k--;
  }

  return res;
}

function inorder(
  root: TreeNode | null,
  target: number,
  reverse: boolean,
  stack: number[],
) {
  if (root == null) {
    return;
  }
  inorder(reverse ? root.right : root.left, target, reverse, stack);
  if ((reverse && root.val <= target) || (!reverse && root.val > target)) {
    return;
  }
  stack.push(root.val);
  inorder(reverse ? root.left : root.right, target, reverse, stack);
}
