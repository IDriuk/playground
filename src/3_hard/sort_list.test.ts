// Sort List
// Given the head of a linked list, return the list after sorting it in ascending order.
// https://leetcode.com/problems/sort-list/
// connect: undefined

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  return sort(head);

  function sort(h: ListNode): ListNode {
    if (!h.next) return h;

    // Split the list into halves
    let slow: ListNode = h;
    let fast: ListNode = h;

    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    const mid: ListNode = slow.next!;
    slow.next = null;

    return merge(sort(h), sort(mid));
  }

  function merge(l: ListNode | null, r: ListNode | null): ListNode {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l && r) {
      if (l.val < r.val) {
        current.next = l;
        l = l.next;
      } else {
        current.next = r;
        r = r.next;
      }
      current = current.next;
    }

    current.next = l ?? r;
    return dummy.next!;
  }
}

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('sortList', () => {
  it('sorts an unsorted linked list', () => {
    const head = createLinkedList([4, 2, 1, 3]);
    const sorted = sortList(head);
    expect(linkedListToArray(sorted)).toEqual([1, 2, 3, 4]);
  });

  it('handles an already sorted list', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    const sorted = sortList(head);
    expect(linkedListToArray(sorted)).toEqual([1, 2, 3, 4]);
  });

  it('handles a list with duplicate values', () => {
    const head = createLinkedList([4, 2, 4, 1]);
    const sorted = sortList(head);
    expect(linkedListToArray(sorted)).toEqual([1, 2, 4, 4]);
  });

  it('handles an empty list', () => {
    const sorted = sortList(null);
    expect(linkedListToArray(sorted)).toEqual([]);
  });

  it('handles a single-node list', () => {
    const head = new ListNode(5);
    const sorted = sortList(head);
    expect(linkedListToArray(sorted)).toEqual([5]);
  });
});


