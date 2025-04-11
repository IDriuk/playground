/*
  369. Plus One Linked List
  Given a non-negative integer represented as non-empty a singly linked list of digits,
  plus one to the integer.
  You may assume the integer do not contain any leading zero, except the number 0 itself.
  The digits are stored such that the most significant digit is at the head of the list.
*/

import { arrayToList, listToArray } from "../101-200";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function plusOneList(listAr: number[]) {
  let head = arrayToList(listAr);
  let dummy: ListNode = new Node<number>(0);
  dummy.next = head!;
  let i = dummy;
  let j = dummy;

  while (j.next != null) {
    j = j.next;
    if (j.val != 9) {
      i = j;
    }
  }

  if (j.val != 9) {
    j.val++;
  } else {
    i.val++;
    i = i.next!;
    while (i != null) {
      i.val = 0;
      i = i.next!;
    }
  }

  if (dummy.val == 0) {
    return listToArray(dummy.next);
  }

  return listToArray(dummy);
}
