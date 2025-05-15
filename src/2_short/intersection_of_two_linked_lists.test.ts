// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.
// Custom Judge:
// The inputs to the judge are given as follows (your program is not given these inputs):
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/
// connect: list, interesting


class ListNode3 {
  val: number;
  next: ListNode3 | null;

  constructor(val: number) {
      this.val = val;
      this.next = null;
  }
}

function getIntersectionNode(headA: ListNode3 | null, headB: ListNode3 | null): ListNode3 | null {
  if (!headA || !headB) return null;
  
  let pA: ListNode3 | null = headA;
  let pB: ListNode3 | null = headB;
  let lastA: ListNode3 | null = null;
  let lastB: ListNode3 | null = null;
  
  while (true) {
      if (pA === pB) {
          return pA;
      } else {
          if (!pA.next) lastA = pA;
          if (!pB.next) lastB = pB;
          if (lastA && lastB && lastA !== lastB) return null;
          pA = pA.next || headB;
          pB = pB.next || headA;
      }
  }
}

// Test cases
describe('getIntersectionNode', () => {
  test('should return null for empty lists', () => {
      expect(getIntersectionNode(null, null)).toBeNull();
  });

  test('should return null for non-intersecting lists', () => {
      const list1 = new ListNode3(1);
      list1.next = new ListNode3(2);
      list1.next.next = new ListNode3(3);

      const list2 = new ListNode3(4);
      list2.next = new ListNode3(5);

      expect(getIntersectionNode(list1, list2)).toBeNull();
  });

  test('should return intersecting node', () => {
      const commonNode = new ListNode3(8);
      commonNode.next = new ListNode3(9);

      const list1 = new ListNode3(1);
      list1.next = new ListNode3(2);
      list1.next.next = commonNode;

      const list2 = new ListNode3(4);
      list2.next = new ListNode3(5);
      list2.next.next = new ListNode3(6);
      list2.next.next.next = commonNode;

      expect(getIntersectionNode(list1, list2)).toBe(commonNode);
  });

  test('should handle lists of different lengths', () => {
      const commonNode = new ListNode3(7);

      const list1 = new ListNode3(1);
      list1.next = new ListNode3(2);
      list1.next.next = new ListNode3(3);
      list1.next.next.next = commonNode;

      const list2 = new ListNode3(4);
      list2.next = commonNode;

      expect(getIntersectionNode(list1, list2)).toBe(commonNode);
  });

  test('should return null when lists end with different nodes', () => {
      const list1 = new ListNode3(1);
      list1.next = new ListNode3(2);
      list1.next.next = new ListNode3(3);

      const list2 = new ListNode3(4);
      list2.next = new ListNode3(5);
      list2.next.next = new ListNode3(6);

      expect(getIntersectionNode(list1, list2)).toBeNull();
  });
});