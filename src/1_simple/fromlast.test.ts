// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
// connect: interesting, list, declare

import { LinkedList } from '../helpers/linkedlist'

function fromLast<T>(list: LinkedList<T>, n: number): ListNode<T> | null {
  let slow = list.getFirst();
  let fast = list.getFirst();

  // Handle edge cases
  if (!slow || !fast) {
    return null;
  }

  // Move fast pointer n nodes ahead
  while (n > 0) {
    if (!fast.next) {
      return null; // n is greater than list length
    }
    fast = fast.next;
    n--;
  }

  // Move both pointers until fast reaches the end
  while (fast.next) {
    slow = slow.next!; // Non-null assertion since we know slow can't be null here
    fast = fast.next;
  }

  return slow;
}

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new LinkedList();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3)?.data).toEqual('b');
});