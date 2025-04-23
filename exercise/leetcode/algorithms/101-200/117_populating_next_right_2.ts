/*
  117. Populating Next Right Pointers in Each Node II.
  Given a binary tree.
  Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
  Initially, all next pointers are set to NULL.
  Note:
  You may only use constant extra space.
  Recursive approach is fine, implicit stack space does not count as extra space for this problem.
*/

import { arrayToTree } from "../1-100";
import { treeLinkToArray, TreeLinkNode } from "./116_populating_next_right";

export function populateNextRight2(
  treeAr: (number | null)[],
): number[][] | void {
  let root = arrayToTree(treeAr) as TreeLinkNode;
  if (root == null) {
    return;
  }

  let pre: TreeLinkNode | null = root;
  let dummy = new TreeLinkNode(0);

  while (pre != null) {
    let cur: TreeLinkNode | null = dummy;
    while (pre != null) {
      if (pre.left != null) {
        cur.next = pre.left;
        cur = cur.next;
      }
      if (pre.right != null) {
        cur.next = pre.right;
        cur = cur.next;
      }
      pre = pre.next;
    }

    pre = dummy.next;
    dummy.next = null;
  }

  return treeLinkToArray(root);
}
