/*
  116. Populating Next Right Pointers in Each Node
  Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
  Initially, all next pointers are set to NULL.
  Note:
  You may only use constant extra space.
  Recursive approach is fine, implicit stack space does not count as extra space for this problem.
  You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
*/

import { TreeNode, arrayToTree } from "../1-100";

export class TreeLinkNode extends TreeNode {
  next: TreeLinkNode | null;
  left: TreeLinkNode | null;
  right: TreeLinkNode | null;

  constructor(val: number) {
    super(val);
    this.next = null;
    this.left = null;
    this.right = null;
  }
}

export function treeLinkToArray(root: TreeLinkNode): number[][] {
  let ar: number[][] = [];
  let left = root;
  while (left) {
    let q: number[] = [];
    q.push(left.val);
    let next = left.next;
    while (next) {
      q.push(next.val);
      next = next.next;
    }
    left = left.left!;
    ar.push(q);
  }
  return ar;
}

export function populateNextRight(treeAr: number[]): number[][] | void {
  let root = arrayToTree(treeAr) as TreeLinkNode;
  if (root == null) {
    return;
  }

  let pre: TreeLinkNode | null = root;
  let cur: TreeLinkNode | null = null;

  while (pre.left != null) {
    cur = pre;
    while (cur != null) {
      cur.left!.next = cur.right;
      if (cur.next != null) {
        cur.right!.next = cur.next.left;
      }
      cur = cur.next;
    }
    pre = pre.left;
  }

  return treeLinkToArray(root);
}
