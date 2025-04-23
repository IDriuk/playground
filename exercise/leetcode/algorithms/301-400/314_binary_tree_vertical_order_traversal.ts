/*
  314. Binary Tree Vertical Order Traversal
  Given a binary tree, return the vertical order traversal of its nodes' values. 
  (i.e from top to bottom, column by column).
  If two nodes are in the same row and column, the order should be from left to right.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function verticalOrder(treeAr: (number | null)[]) {
  let root = arrayToTree(treeAr);
  if (root == null) {
    return [];
  }
  let colToNodes: Map<number, number[]> = new Map();
  let min = 0;
  let max = 0;
  let nodes: TreeNode[] = [];
  nodes.push(root);
  let cols: number[] = [];
  cols.push(0);
  while (nodes.length > 0) {
    let node = nodes.shift()!;
    let col = cols.shift()!;
    if (!colToNodes.has(col)) {
      colToNodes.set(col, []);
    }
    colToNodes.get(col)?.push(node.val);
    if (node.left != null) {
      nodes.push(node.left);
      cols.push(col - 1);
      min = Math.min(min, col - 1);
    }
    if (node.right != null) {
      nodes.push(node.right);
      cols.push(col + 1);
      max = Math.max(max, col + 1);
    }
  }
  let res: number[][] = [];
  for (let i = min; i <= max; i++) {
    res.push(colToNodes.get(i)!);
  }
  return res;
}
