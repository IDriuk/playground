/*
  141. Linked List Cycle
  Given a linked list, determine if it has a cycle in it.
  Follow up:
  Can you solve it without using extra space?
*/

class Node<T> {
  public next?: Node<T> | undefined = undefined;
  public prev?: Node<T> | undefined = undefined;
  constructor(public val: T) {}
}

type ListNode = Node<number> | undefined;

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

export function listCycle(head: ListNode): boolean {
  if (head == null || head.next == null) {
    return false;
  }
  let slow: ListNode = head;
  let fast: ListNode = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow?.next;
    fast = fast.next.next;
  }
  return true;
}

listCycle.testList = n1;
