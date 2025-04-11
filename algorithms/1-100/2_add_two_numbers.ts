/*
  2. Add two numbers.

  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order and each of their nodes contain a single digit.
  Add the two numbers and return it as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

export class Node<T> {
  public next?: Node<T> | undefined = undefined;
  public prev?: Node<T> | undefined = undefined;
  constructor(public val: T) {}
}

type ListNode = Node<number> | undefined;

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let result: Node<number> = { val: 0 };
  let p = result;
  let p1 = l1;
  let p2 = l2;
  while (true) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    p.val += v1 + v2;
    p1 = p1 ? p1.next : undefined;
    p2 = p2 ? p2.next : undefined;
    if (!p1 && !p2) {
      return result;
    } else {
      let val = 0;
      if (p.val >= 10) {
        val = 1;
        p.val = p.val - 10;
      }
      p.next = { val };
      p = p.next;
    }
  }
}
