/*
  328. Odd Even Linked List
  Given a singly linked list, group all odd nodes together followed by the even nodes.
  Please note here we are talking about the node number and not the value in the nodes.
  You should try to do it in place.
  The program should run in O(1) space complexity and O(nodes) time complexity.
*/

import { arrayToList, listToArray } from "../101-200";

export function oddEvenList(listAr: number[]) {
  let head = arrayToList(listAr);
  if (head == null) {
    return null;
  }
  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return listToArray(head);
}
