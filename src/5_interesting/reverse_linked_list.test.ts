// Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// https://leetcode.com/problems/reverse-linked-list/submissions/
// connect: interesting, list

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number) {
      this.val = val ?? 0;
      this.next = null;
  }
}




function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
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

describe('reverseList', () => {
  it('reverses a multi-node list', () => {
    // const head = arrayToList([1, 2, 3, 4, 5]);
    // const reversed = reverseList(head!);
    // expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  // it('handles single-node list', () => {
  //   const head = arrayToList([1]);
  //   const reversed = reverseList(head!);
  //   expect(listToArray(reversed)).toEqual([1]);
  // });

  // it('handles empty list', () => {
  //   const head = arrayToList([]);
  //   const reversed = reverseList(head!);
  //   expect(listToArray(reversed)).toEqual([]);
  // });

  // it('reverses two elements', () => {
  //   const head = arrayToList([1, 2]);
  //   const reversed = reverseList(head!);
  //   expect(listToArray(reversed)).toEqual([2, 1]);
  // });
});
