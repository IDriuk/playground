/*
  203. Remove Linked List Elements
  Remove all elements from a linked list of integers that have value val.
*/

import { arrayToList, listToArray } from "../101-200";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function removeElementsRecursive(
  listAr: number[],
  val: number,
): number[] {
  let head = arrayToList(listAr);
  if (!head) {
    return [];
  }
  let newHead = remove(head, val);
  return listToArray(newHead!);
}

function remove(head: ListNode, val: number): ListNode {
  if (head == null) {
    return undefined;
  }
  head.next = remove(head.next, val);
  return head.val == val ? head.next : head;
}
