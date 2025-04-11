/* 
  234. Palindrome Linked List
  Given a singly linked list, determine if it is a palindrome.
*/

import { arrayToList } from "../101-200";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function palindromeLinkedList(listAr: number[]) {
  let head = arrayToList(listAr);
  if (head == null || head.next == null) {
    return true;
  }
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  if (fast != null) {
    slow = slow.next!;
  }

  slow = reverseList(slow)!;

  let cur = head;

  while (slow != null) {
    if (cur.val != slow.val) {
      return false;
    }
    cur = cur.next!;
    slow = slow.next!;
  }

  return true;
}

function reverseList(head: ListNode) {
  let newHead = null;
  while (head != null) {
    let next = head.next;
    head.next = newHead!;
    newHead = head;
    head = next;
  }
  return newHead;
}
