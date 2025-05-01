/*
  142. Linked List Cycle II
  Given a linked list, return the node where the cycle begins. 
  If there is no cycle, return null.
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

export function listCycle2(head: ListNode): number | null {
  if (head == null) {
    return null;
  }

  let intersect = getIntersect(head);
  if (intersect == null) {
    return null;
  }

  let ptr1 = head;
  let ptr2 = intersect;
  while (ptr1 != ptr2) {
    ptr1 = ptr1.next!;
    ptr2 = ptr2.next!;
  }

  return ptr1.val;
}

listCycle2.testList = n1;

function getIntersect(head: ListNode): ListNode {
  let tortoise = head;
  let hare = head;

  while (hare != null && hare.next != null) {
    tortoise = tortoise?.next;
    hare = hare.next.next;
    if (tortoise == hare) {
      return tortoise;
    }
  }
  return undefined;
}
