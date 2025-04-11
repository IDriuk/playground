/* 
  19. Remove Nth Node From End of List
  Given a linked list, remove the n-th node from the end of list and return its head.
  After removing the second node from the end, the linked list becomes 1->2->3->5
  Note:
  Given n will always be valid.
  Follow up:
  Could you do this in one pass?
*/

import { Node } from "./2_add_two_numbers";

export function removeNthFromEnd(list: Node<number>, n: number): Node<number> {
  let head = list;
  let p1 = list;
  let p2 = list;

  for (let i = 0; i < n; i++) {
    if (!p2.next) {
      return head;
    } else {
      p2 = p2.next;
    }
  }

  while (p2.next) {
    p1 = p1.next!;
    p2 = p2.next;
  }

  p1.next = p1.next?.next;

  return head;
}
