/* 
  21. Merge Two Sorted Lists
  Merge two sorted linked lists and return it as a new list.
  The new list should be made by splicing together the nodes of the first two lists.
*/

import { Node } from "./2_add_two_numbers";

export function mergeTwoLists(
  l1: Node<number> | undefined,
  l2: Node<number> | undefined,
): Node<number> {
  let head: Node<number> = { val: 0 };
  let p = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
      p = p.next;
    } else {
      p.next = l2;
      l2 = l2.next;
      p = p.next;
    }
  }

  if (l1) {
    p.next = l1;
  } else if (l2) {
    p.next = l2;
  }

  return head.next!;
}
