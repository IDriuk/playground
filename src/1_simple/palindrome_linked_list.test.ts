// Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
//https://leetcode.com/problems/palindrome-linked-list/submissions/
// connect: interesting

export class ListNode5 {
  val: number;
  next: ListNode5 | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
  
}

export function isPalindrome(head: ListNode5 | null): boolean {
  if (!head) return true;

  let cur: ListNode5 | null = head;
  const ar: number[] = [];

  while (cur) {
    ar.push(cur.val);
    cur = cur.next;
  }

  let i = 0;
  let j = ar.length - 1;
  while (i <= j) {
    if (ar[i] !== ar[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function createLinkedList(values: number[]): ListNode5 | null {
  if (values.length === 0) return null;
  const head = new ListNode5(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode5(values[i]);
    current = current.next;
  }
  return head;
}

describe('isPalindrome', () => {
  it('should return true for a palindrome list [1, 2, 2, 1]', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it('should return false for a non-palindrome list [1, 2]', () => {
    const head = createLinkedList([1, 2]);
    expect(isPalindrome(head)).toBe(false);
  });

  it('should return true for a single-node list [1]', () => {
    const head = createLinkedList([1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it('should return true for an empty list []', () => {
    const head = createLinkedList([]);
    expect(isPalindrome(head)).toBe(true);
  });

  it('should return true for a palindrome list [1, 2, 3, 2, 1]', () => {
    const head = createLinkedList([1, 2, 3, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });
});
