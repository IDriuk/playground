// Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// connect: list

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || !n) return head;

  let pl: ListNode = head;
  let pr: ListNode = head;
  let steps = n - 1;

  while (steps > 0 && pr.next) {
    pr = pr.next;
    steps--;
  }

  if (steps > 0) {
    return head;
  } else if (!pr.next) {
    return head.next;
  }

  pr = pr.next;
  while (pr.next) {
    pr = pr.next;
    pl = pl.next!;
  }

  if (pl.next) {
    pl.next = pl.next.next;
  }

  return head;
}


function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('removeNthFromEnd', () => {
  it('removes the last node', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const newHead = removeNthFromEnd(head, 1);
    expect(listToArray(newHead)).toEqual([1, 2, 3, 4]);
  });

  it('removes the head node', () => {
    const head = arrayToList([1, 2]);
    const newHead = removeNthFromEnd(head, 2);
    expect(listToArray(newHead)).toEqual([2]);
  });

  it('removes the middle node', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const newHead = removeNthFromEnd(head, 3);
    expect(listToArray(newHead)).toEqual([1, 2, 4, 5]);
  });

  it('handles single element list', () => {
    const head = arrayToList([1]);
    const newHead = removeNthFromEnd(head, 1);
    expect(listToArray(newHead)).toEqual([]);
  });

  it('handles n larger than list length', () => {
    const head = arrayToList([1, 2]);
    const newHead = removeNthFromEnd(head, 3);
    expect(listToArray(newHead)).toEqual([1, 2]);
  });
});


