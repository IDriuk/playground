/*
  61. Rotate List
  Given a linked list, rotate the list to the right by k places, where k is non-negative.
*/

import { Node } from "./2_add_two_numbers";

type ListNode = Node<number> | undefined;

export function rotateList(head: ListNode, n: number): ListNode {
  if (head == null || head.next == null) {
    return head;
  }

  let dummy: ListNode = { val: 0 };
  dummy.next = head;

  let fast: ListNode = dummy;
  let slow: ListNode = dummy;

  let len = 0;

  while (fast.next != null) {
    fast = fast.next;
    len++;
  }

  for (let j = len - (n % len); j > 0; j--) {
    slow = slow!.next;
  }

  fast.next = dummy.next;
  dummy.next = slow!.next;
  slow!.next = undefined;

  return dummy.next;
}
