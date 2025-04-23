/*
  206. Reverse Linked List
  Reverse a singly linked list.
*/

import { arrayToList, listToArray } from "../101-200";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function reverseLinkedList(listAr: number[]): number[] {
  let head = arrayToList(listAr);

  return listToArray(reverse(head!));
}

function reverse(head: ListNode): ListNode {
  if (head == null || head.next == null) {
    return head;
  }

  let newHead = reverse(head.next);

  head.next.next = head;
  head.next = undefined;

  return newHead;
}
