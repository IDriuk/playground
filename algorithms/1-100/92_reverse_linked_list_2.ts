/*
  92. Reverse Linked List II
  Reverse a linked list from position m to n. Do it in one-pass.
  Note: 1 <= m <= n <= length of list.
*/

import { Node } from "./2_add_two_numbers";

type ListNode = Node<number> | undefined;

export function reverseLinkedList2(
  head: ListNode,
  m: number,
  n: number,
): ListNode {
  if (m >= n || head == null) {
    return head;
  }

  let dummy: ListNode = { val: 0 };
  dummy.next = head;
  let pre = dummy;

  for (let i = 1; i < m; i++) {
    pre = pre.next!;
  }

  let subhead = pre.next;
  for (let i = m; i < n; i++) {
    let temp = subhead?.next?.next;
    subhead!.next!.next = pre.next;
    pre.next = subhead?.next;
    subhead!.next = temp;
  }

  return dummy.next;
}
