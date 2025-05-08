// Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/submissions/
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.
// connect: undefined

class Node1 {
  val: number;
  next: Node1 | null;
  random: Node1 | null;
  weave?: Node1;

  constructor(val?: number, next?: Node1 | null, random?: Node1 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
    this.random = random ?? null;
  }
}

function copyRandomList(head: Node1 | null): Node1 | null {
  if (head === null) return null;

  const copyHead = new Node1(head.val);
  head.weave = copyHead;

  let cur: Node1 | null = head;
  let copyCur: Node1 = copyHead;

  while (cur.next) {
    const next = cur.next;
    const copyNext = new Node1(next.val);
    next.weave = copyNext;
    copyCur.next = copyNext;

    cur = cur.next;
    copyCur = copyCur.next!;
  }

  cur = head;
  while (cur) {
    const copyNode = cur.weave!;
    copyNode.random = cur.random ? cur.random.weave! : null;
    cur = cur.next;
  }

  return copyHead;
}

function listsEqual(a: Node1 | null, b: Node1 | null): boolean {
  const visited = new Map<Node1, Node1>();

  let curA = a;
  let curB = b;

  while (curA && curB) {
    if (curA.val !== curB.val) return false;
    visited.set(curA, curB);
    curA = curA.next;
    curB = curB.next;
  }

  if (curA || curB) return false;

  curA = a;
  curB = b;

  while (curA && curB) {
    if (
      (curA.random === null && curB.random !== null) ||
      (curA.random !== null && curB.random === null)
    ) {
      return false;
    }

    if (
      curA.random &&
      curB.random &&
      visited.get(curA.random) !== curB.random
    ) {
      return false;
    }

    curA = curA.next;
    curB = curB.next;
  }

  return true;
}

describe('copyRandomList', () => {
  test('copies a list with random pointers', () => {
    const n1 = new Node1(1);
    const n2 = new Node1(2);
    const n3 = new Node1(3);

    n1.next = n2;
    n2.next = n3;

    n1.random = n3;
    n2.random = n1;
    n3.random = n2;

    const copy = copyRandomList(n1);
    expect(listsEqual(n1, copy)).toBe(true);
  });

  test('returns null for empty list', () => {
    expect(copyRandomList(null)).toBe(null);
  });

  test('copies a single node with null random', () => {
    const n1 = new Node1(42);
    const copy = copyRandomList(n1);
    expect(copy).not.toBe(n1);
    expect(copy?.val).toBe(42);
    expect(copy?.random).toBe(null);
    expect(copy?.next).toBe(null);
  });

  test('copies a two-node list with null randoms', () => {
    const n1 = new Node1(1);
    const n2 = new Node1(2);
    n1.next = n2;

    const copy = copyRandomList(n1);
    expect(copy?.val).toBe(1);
    expect(copy?.next?.val).toBe(2);
    expect(copy?.random).toBe(null);
    expect(copy?.next?.random).toBe(null);
  });
});
