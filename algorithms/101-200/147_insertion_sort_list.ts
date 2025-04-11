/*
  147. Insertion Sort List
  Sort a linked list using insertion sort.

  A graphical example of insertion sort. 
  The partial sorted list (black) initially contains only the first element in the list.
  With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list.

  Algorithm of Insertion Sort:
  Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
  At each iteration , insertion sort removes one element from the input data, finds the location it belongs within the sorted list,
  and inserts it there.
  It repeats until no input elements remain.
*/

import { arrayToList } from "./109_convert_sorted_list_to_bst";
import { Node } from "../1-100";
import { listToArray } from "./143_reorder_list";
type ListNode = Node<number> | undefined;

export function insertionSort(listAr: number[]): number[] {
  let head = arrayToList(listAr);
  if (head == null || head.next == null) {
    return [];
  }
  let pre = new Node(0);
  pre.next = head;

  for (let p = head.next, prev = head; p != null; prev = p, p = p.next!) {
    for (let c = pre; c.next != p; c = c.next!) {
      if (c.next!.val > p.val) {
        prev.next = p.next;
        p.next = c.next;
        c.next = p;
        p = prev;
        break;
      }
    }
  }

  return listToArray(pre.next);
}
