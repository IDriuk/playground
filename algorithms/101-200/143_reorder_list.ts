/* 
  143. Reorder List
  Given a singly linked list L: L0 -> L1 -> ... -> Ln-1 -> Ln
  reorder it to:
  L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...
  You may not modify the values in the list's nodes, only nodes itself may be changed.
*/

import { arrayToList } from "./109_convert_sorted_list_to_bst";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function listToArray(head: ListNode): number[] {
  if (head == null) {
    return [];
  }

  let res = [];
  let cur = head;
  while (cur != null) {
    res.push(cur.val);
    cur = cur.next!;
  }
  return res;
}

export function reorderList(listAr: number[]): number[] | void {
  let head = arrayToList(listAr);
  if (head == null) {
    return;
  }
  if (head.next == null) {
    return;
  }

  let mid: ListNode = head;
  let tail: ListNode = head;
  while (tail != null && tail.next != null) {
    mid = mid.next!;
    tail = tail.next.next;
  }

  let cur = mid.next;
  mid.next = undefined;

  while (cur != null) {
    let temp = cur.next;
    cur.next = mid.next;
    mid.next = cur;
    cur = temp;
  }

  let left = head;
  let right = mid.next;

  while (right != null) {
    mid.next = right.next;
    right.next = left.next;
    left.next = right;
    left = right.next!;
    right = mid.next;
  }

  return listToArray(head);
}
