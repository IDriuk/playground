/*
  382. Linked List Random Node
  Given a singly linked list, return a random node's value from the linked list.
  Each node must have the same probability of being chosen.
  Follow up:
  What if the linked list is extremely large and its length is unknown to you?
  Could you solve this efficiently without using extra space?
*/

import { arrayToList } from "../101-200";
import { Node } from "../1-100";

type ListNode = Node<number> | undefined;

export class RandomLinkNode {
  head: ListNode | null;
  current: ListNode | null;

  constructor(listAr: number[]) {
    let head = arrayToList(listAr);
    this.head = head;
    this.current = head;
  }

  getRandom = () => {
    let res = this.head?.val;
    let n = this.head?.next;
    let i = 2;
    while (n != null) {
      if (!~~(Math.random() * i)) {
        res = n.val;
      }
      n = n.next;
      i++;
    }
    return res;
  };
}
