/*
  82. Remove Duplicates from Sorted List II
  Given a sorted linked list, delete all nodes that have duplicate numbers,
  leaving only distinct numbers from the original list
*/

import { Node } from "./2_add_two_numbers";

type ListNode = Node<number> | undefined;

export function removeDuplicatesFromSortedList2(head: ListNode): ListNode {
  if (head == null || head.next == null) return head;

  let dummyHead: ListNode = { val: 0, next: head };

  let pre = dummyHead;
  let cur: ListNode | null = head;

  while (cur != null) {
    while (cur.next != null && cur.val == cur.next.val) {
      cur = cur.next;
    }
    if (pre.next == cur) {
      pre = pre.next;
    } else {
      pre.next = cur.next;
    }
    cur = cur.next;
  }

  return dummyHead.next;
}
