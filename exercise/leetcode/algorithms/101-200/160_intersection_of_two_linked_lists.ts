/* 
  160. Intersection of Two Linked Lists
  Write a program to find the node at which the intersection of two singly linked lists begins.

  Notes:
  If the two linked lists have no intersection at all, return null.
  The linked lists must retain their original structure after the function returns.
  You may assume there are no cycles anywhere in the entire linked structure.
  Your code should preferably run in O(n) time and use only O(1) memory.
*/

import { arrayToList } from "./109_convert_sorted_list_to_bst";
import { Node } from "../1-100";
type ListNode = Node<number> | undefined;

export function getIntersectionNode(
  listAr1: number[],
  listAr2: number[],
): number | null {
  let headA = arrayToList(listAr1);
  let headB = arrayToList(listAr2);

  if (headA == null || headB == null) {
    return null;
  }

  let lenA = length(headA);
  let lenB = length(headB);
  let diff = Math.abs(lenA - lenB);

  if (lenA > lenB) {
    while (diff-- > 0) {
      headA = headA?.next;
    }
  } else {
    while (diff-- > 0) {
      headB = headB?.next;
    }
  }

  for (
    ;
    headA != null && headB != null;
    headA = headA.next, headB = headB.next
  ) {
    if (headA.val == headB.val) {
      return headA.val;
    }
  }

  return null;
}

function length(n: ListNode): number {
  if (n == null) {
    return 0;
  }
  let length = 0;
  while (n != null) {
    length++;
    n = n.next;
  }
  return length;
}
