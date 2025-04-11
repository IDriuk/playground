/*
  86. Partition List
  Given a linked list and a value x,
  partition it such that all nodes less than x come before nodes greater than or equal to x.
  You should preserve the original relative order of the nodes in each of the two partitions.
*/

import { Node } from "./2_add_two_numbers";

type ListNode = Node<number> | undefined;

export function partitionList(head: ListNode, x: number): ListNode {
  if (head == null || head.next == null) return head;
  let cur = head;
  let pre1: ListNode = { val: 0 };
  let p = pre1;
  let pre2: ListNode = { val: 0 };
  let q = pre2;

  while (cur != null) {
    if (cur.val < x) {
      p.next = cur;
      p = p.next;
    } else {
      q.next = cur;
      q = q.next;
    }
    cur = cur.next!;
  }

  // @ts-ignore
  q.next = null;
  p.next = pre2.next;

  return pre1.next;
}
