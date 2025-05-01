/*
  108. Convert Sorted Array to Binary Search Tree
  Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
  For this problem , a height - balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

import { TreeNode, treeToArray } from "../1-100";

export function sortedArrayToBST(num: number[]): (number | null)[] | null {
  if (num == null || num.length == 0) return null;
  return treeToArray(convert(num, 0, num.length - 1));
}

function convert(num: number[], left: number, right: number): TreeNode | null {
  if (left > right) {
    return null;
  }

  let mid = left + Math.floor((right - left) / 2);

  let root = new TreeNode(num[mid]);
  root.left = convert(num, left, mid - 1);
  root.right = convert(num, mid + 1, right);
  return root;
}
