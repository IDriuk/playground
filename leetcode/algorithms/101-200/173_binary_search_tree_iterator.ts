/*
  173. Binary Search Tree Iterator
  Implement an iterator over a binary search tree (BST). 
  Your iterator will be initialized with the root node of a BST.

  Calling next() will return the next smallest number in BST.
  
  Note: 
  next() and hasNext() should run in average O(1) time and uses O(h) memory,
  where h is the height of the tree. 
*/

import { TreeNode, arrayToTree } from "../1-100";

export function getBinarySearchTreeIterator(treeAr: number[]) {
  let root: TreeNode = arrayToTree(treeAr)!;

  let stack: TreeNode[] = [];
  pushAllLeft(root);

  function pushAllLeft(root: TreeNode) {
    while (root != null) {
      stack.push(root);
      root = root.left!;
    }
  }

  let hasNext = () => {
    return stack.length > 0;
  };

  let next = (): number => {
    let n = stack.pop();
    pushAllLeft(n?.right!);
    return n!.val;
  };

  return {
    hasNext,
    next,
  };
}
