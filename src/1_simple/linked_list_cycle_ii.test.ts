// Linked List Cycle II
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list 
// that can be reached again by continuously following the next pointer. Internally, 
// pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). 
// It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.
// https://leetcode.com/problems/linked-list-cycle-ii/
// connect: list, interesting


class ListNode4 {
  val: number;
  next: ListNode4 | null;

  constructor(val: number) {
      this.val = val;
      this.next = null;
  }
}

function detectCycle(head: ListNode4 | null): ListNode4 | null {
  if (!head || !head.next || !head.next.next) {
      return null;
  }

  let p1: ListNode4 | null = head.next;
  let p2: ListNode4 | null = head.next.next;

  while (p1 !== p2) {
      if (!p2.next || !p2.next.next) {
          return null;
      }
      p1 = p1!.next;
      p2 = p2.next.next;
  }

  p1 = head;
  while (p1 !== p2) {
      p1 = p1!.next;
      p2 = p2!.next;
  }

  return p1;
}

// Test cases
describe('detectCycle', () => {
  it('should return null for an empty list', () => {
      expect(detectCycle(null)).toBeNull();
  });

  it('should return null for a single node without cycle', () => {
      const head = new ListNode4(1);
      expect(detectCycle(head)).toBeNull();
  });

  it('should return null for a two-node list without cycle', () => {
      const head = new ListNode4(1);
      head.next = new ListNode4(2);
      expect(detectCycle(head)).toBeNull();
  });

  it('should detect cycle in a two-node cyclic list', () => {
      const head = new ListNode4(1);
      head.next = new ListNode4(2);
      head.next.next = head;
      expect(detectCycle(head)).toBe(head);
  });

  it('should detect cycle in a three-node cyclic list', () => {
      const head = new ListNode4(1);
      head.next = new ListNode4(2);
      head.next.next = new ListNode4(3);
      head.next.next.next = head.next;
      expect(detectCycle(head)).toBe(head.next);
  });

  it('should detect cycle at head in a circular list', () => {
      const head = new ListNode4(1);
      head.next = new ListNode4(2);
      head.next.next = new ListNode4(3);
      head.next.next.next = head;
      expect(detectCycle(head)).toBe(head);
  });

  it('should return null for a large list without cycle', () => {
      const head = new ListNode4(1);
      let current = head;
      for (let i = 2; i <= 10; i++) {
          current.next = new ListNode4(i);
          current = current.next;
      }
      expect(detectCycle(head)).toBeNull();
  });

  it('should detect cycle in a large list with cycle', () => {
      const head = new ListNode4(1);
      let current = head;
      let cycleNode: ListNode4 | null = null;
      
      for (let i = 2; i <= 10; i++) {
          current.next = new ListNode4(i);
          current = current.next;
          if (i === 5) {
              cycleNode = current;
          }
      }
      current.next = cycleNode;
      
      expect(detectCycle(head)).toBe(cycleNode);
  });
});