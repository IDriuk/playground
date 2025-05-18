// Linked list cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list 
// that can be reached again by continuously following the next pointer. Internally, 
// pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// https://leetcode.com/problems/linked-list-cycle/submissions/
// connect: list


// faster solution
/* 
  var hasCycle = function(head) {
    
    while (head) {
        if ( head.checked ) {
            return true
        }
        head.checked = true
        head = head.next
    }
    
    return false
  };
*/

// two pointers, fast and slow runners
/*
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    ListNode slow = head;
    ListNode fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
*/

// @ts-ignore
class ListNode4 {
  val: number;
  next: ListNode4 | null;

  constructor(val: number) {
      this.val = val;
      this.next = null;
  }
}

function hasCycle(head: ListNode4 | null): boolean {
  let cur = head;
  const visitedNodes = new WeakSet<ListNode4>();
  
  while (cur) {
      if (visitedNodes.has(cur)) {
          return true;
      }
      visitedNodes.add(cur);
      cur = cur.next;
  }
  
  return false;
}

// Tests
describe('hasCycle', () => {
  it('should return false for an empty list', () => {
      expect(hasCycle(null)).toBe(false);
  });

  it('should return false for a single node without cycle', () => {
      const node = new ListNode4(1);
      expect(hasCycle(node)).toBe(false);
  });

  it('should return true for a single node with cycle', () => {
      const node = new ListNode4(1);
      node.next = node; // creates a cycle
      expect(hasCycle(node)).toBe(true);
  });

  it('should return false for a linear list without cycle', () => {
      const node1 = new ListNode4(1);
      const node2 = new ListNode4(2);
      const node3 = new ListNode4(3);
      node1.next = node2;
      node2.next = node3;
      expect(hasCycle(node1)).toBe(false);
  });

  it('should return true for a list with cycle', () => {
      const node1 = new ListNode4(1);
      const node2 = new ListNode4(2);
      const node3 = new ListNode4(3);
      node1.next = node2;
      node2.next = node3;
      node3.next = node2; // creates a cycle
      expect(hasCycle(node1)).toBe(true);
  });

  it('should return true for a circular list', () => {
      const node1 = new ListNode4(1);
      const node2 = new ListNode4(2);
      const node3 = new ListNode4(3);
      node1.next = node2;
      node2.next = node3;
      node3.next = node1; // creates a cycle
      expect(hasCycle(node1)).toBe(true);
  });
});
