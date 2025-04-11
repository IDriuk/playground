/* 
  25. Reverse Nodes in k-Group
  Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
  k is a positive integer and is less than or equal to the length of the linked list. 
  If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
  Note:
  Only constant extra memory is allowed. 
  You may not alter the values in the list's nodes, only nodes itself may be changed.
*/

import { Node } from "./2_add_two_numbers";

export function reverseKGroups(
  list: Node<number>,
  k: number,
): Node<number> | undefined {
  let head = list;
  let nextHead = head;
  let count = 0;

  while (nextHead && count != k) {
    count++;
    nextHead = nextHead.next!;
  }

  if (count != k) {
    return head;
  }

  let newHead = reverseKGroups(nextHead, k);

  while (count > 0) {
    let next = head.next;
    head.next = newHead;
    newHead = head;
    head = next!;
    count--;
  }

  return newHead;
}
