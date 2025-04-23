/* 
  24. Swap Nodes in Pairs
  Given a linked list, swap every two adjacent nodes and return its head.
  Note:
  Your algorithm should use only constant extra space. 
  You may not modify the values in the list's nodes, only nodes itself may be changed. 
*/

import { Node } from "./2_add_two_numbers";

export function swapNodesPairs(list: Node<number>): Node<number> | undefined {
  let dummy: Partial<Node<number>> = {};
  dummy.next = list;
  let cur = dummy;
  while (cur && cur.next && cur.next.next) {
    cur.next = swap(cur.next, cur.next.next);
    cur = cur?.next?.next!;
  }
  return dummy.next;
}

function swap(first: Node<number>, second: Node<number>): Node<number> {
  first.next = second.next;
  second.next = first;
  return second;
}
