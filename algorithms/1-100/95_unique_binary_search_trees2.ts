/*
  95. Unique Binary Search Trees II
  Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.
*/

import { TreeNode, treeToArray } from "./94_binary_tree_inorder_traversal";

export function uniqueBinarySearchTrees2(n: number): (number | null)[][] {
  let trees = generateTrees(1, n);
  let res: (number | null)[][] = trees.map((t) => treeToArray(t));
  return res;
}

function generateTrees(start: number, end: number): (TreeNode | null)[] {
  let list: (TreeNode | null)[] = [];
  if (start > end) {
    list.push(null);
    return list;
  }

  let left: (TreeNode | null)[];
  let right: (TreeNode | null)[];

  for (let i = start; i <= end; i++) {
    left = generateTrees(start, i - 1);
    right = generateTrees(i + 1, end);
    for (let lnode of left) {
      for (let rnode of right) {
        let root = new TreeNode(i);
        root.left = lnode;
        root.right = rnode;
        list.push(root);
      }
    }
  }

  return list;
}
