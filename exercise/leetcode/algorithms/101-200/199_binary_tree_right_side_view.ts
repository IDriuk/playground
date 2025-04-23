/*
  199. Binary Tree Right Side View
  Given a binary tree, imagine yourself standing on the right side of it,
  return the values of the nodes you can see ordered from top to bottom.
*/

import { TreeNode, arrayToTree } from "../1-100";

export function rightSideView(treeAr: (number | null)[]): number[] {
  let root = arrayToTree(treeAr);

  let rightmostValueAtDepth = new Map<number, number>();
  let max_depth = -1;

  let nodeQueue: TreeNode[] = [];
  let depthQueue: number[] = [];

  nodeQueue.push(root!);
  depthQueue.push(0);

  while (nodeQueue.length > 0) {
    let node = nodeQueue.shift();
    let depth: number = depthQueue.shift()!;

    if (node != null) {
      max_depth = Math.max(max_depth, depth);

      rightmostValueAtDepth.set(depth, node.val);

      nodeQueue.push(node.left!);
      nodeQueue.push(node.right!);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }

  let rightView: number[] = [];
  for (let depth = 0; depth <= max_depth; depth++) {
    rightView.push(rightmostValueAtDepth.get(depth)!);
  }

  return rightView;
}
