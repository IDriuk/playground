/*
  109. Convert Sorted List to Binary Search Tree
  Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
  For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

import { TreeNode, treeToArray } from "../1-100";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function arrayToList(ar: number[]): ListNode | null {
  if (!ar || ar.length == 0) {
    return null;
  }
  let dummy: ListNode = new Node<number>(0);
  let cur = dummy;
  for (let v of ar) {
    cur.next = new Node<number>(v);
    cur = cur.next;
  }
  return dummy.next;
}

export function sortedListToBST(listAr: number[]): (number | null)[] | null {
  let head: ListNode | null = arrayToList(listAr);
  let cur: ListNode | null = head;

  function buildTree(n: number): TreeNode | null {
    if (n == 0) {
      return null;
    }

    let node: TreeNode = new TreeNode(0);
    node.left = buildTree(Math.floor(n / 2));
    node.val = cur!.val;
    cur = cur?.next;
    node.right = buildTree(n - Math.floor(n / 2) - 1);

    return node;
  }

  function lengthOfList(node: ListNode | null): number {
    let length = 0;
    while (node != null) {
      node = node.next;
      length++;
    }
    return length;
  }
  return treeToArray(buildTree(lengthOfList(head)));
}
