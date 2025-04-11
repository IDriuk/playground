/*
  83. Remove Duplicates from Sorted List
  Given a sorted linked list, delete all duplicates such that each element appear only once.
*/

import { Node } from "./2_add_two_numbers";

type ListNode = Node<number> | undefined;

export function removeDuplicatesFromSortedList(head: ListNode): ListNode {
  if (head == null || head.next == null) return head;

  let cur: ListNode | null = head;

  while (cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}
