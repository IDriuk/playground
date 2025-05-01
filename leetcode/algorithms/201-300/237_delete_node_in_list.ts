/*
  237. Delete Node in a Linked List
  Write a function to delete a node (except the tail) in a singly linked list,
  given only acces to that node.
*/

import { arrayToList, listToArray } from "../101-200";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export function deleteNode(listAr: number[], n: number) {
  let head = arrayToList(listAr);
  let node = head;
  while (node && node.val != n) {
    node = node.next;
  }

  node!.val = node!.next!.val;
  node!.next = node?.next?.next;

  return listToArray(head!);
}
