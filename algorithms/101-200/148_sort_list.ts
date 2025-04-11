/*
  148. Sort List
  Sort a linked list in O(n log n) time using constant space complexity.
*/

import { arrayToList } from "./109_convert_sorted_list_to_bst";
import { Node } from "../1-100";
import { listToArray } from "./143_reorder_list";

type ListNode = Node<number> | undefined;

export function sortList(listAr: number[]): number[] {
  let head = arrayToList(listAr);
  if (head == null) {
    return [];
  }
  if (head.next == null) {
    return [head.val];
  }

  let tail: ListNode = head;
  let len = 0;
  while (tail != null) {
    tail = tail.next;
    len++;
  }

  let dummy = new Node<number>(-Infinity);
  dummy.next = head;
  head = mergeSort(dummy, head, len);

  return listToArray(head!);
}

function mergeSort(preHead: ListNode, head: ListNode, len: number): ListNode {
  if (head == null || len <= 1) {
    return head;
  }

  let left = ~~(len / 2);
  let right = len - left;
  head = mergeSort(preHead, head, left);

  let pMid: ListNode = head;
  for (let i = 0; i < left - 1; i++) {
    pMid = pMid?.next;
  }
  mergeSort(pMid, pMid?.next, right);

  let pre1 = preHead;
  let p1 = head;
  let pre2 = pMid;
  let p2 = pMid?.next;
  if (p1!.val > p2!.val) {
    head = p2;
  }
  while (left > 0 && right > 0) {
    if (p1!.val > p2!.val) {
      pre2!.next = p2?.next;
      p2!.next = p1;
      pre1!.next = p2;
      pre1 = p2;
      p2 = pre2?.next;
      right--;
    } else {
      pre1 = p1;
      p1 = p1?.next;
      left--;
    }
  }

  return head;
}
