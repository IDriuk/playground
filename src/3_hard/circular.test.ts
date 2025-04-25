// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
// connect: list, symbol

class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T, next: ListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;

  constructor(values = []) {
    this.head = null;

    for (let value of values) {
      this.insertLast(value);
    }
  }

  clear() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getAt(index: number) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node: ListNode<T> | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  insertAt(data: T, index: number) {
    if (!this.head) {
      this.head = new ListNode(data);
      return;
    }

    if (index === 0) {
      this.head = new ListNode(data, this.head);
      return;
    }

    let counter = 1;
    let previous = this.head;
    let node = this.head.next;
    while (node) {
      if (counter === index) {
        previous.next = new ListNode(data, node);
        return;
      }
      previous = node;
      node = node.next;
      counter++;
    }

    previous.next = new ListNode(data, node);
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  removeAt(index: number) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let node: ListNode<T> | null = this.head;
    while (node) {
      if (counter === index - 1) {
        if (node.next) {
          return (node.next = node.next.next);
        } else {
          return (node.next = null);
        }
      }
      node = node.next;
      counter++;
    }
  }

  getFirst() {
    return this.head;
  }

  insertFirst(data: T) {
    this.head = new ListNode(data, this.getFirst());
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  insertLast(data: T) {
    const last = this.getLast();

    if (last) {
      last.next = new ListNode(data);
      return last.next;
    } else {
      this.head = new ListNode(data);
      return this.head;
    }
  }

  forEach(fn: (x: ListNode<T>) => {}) {
    if (!this.head) {
      return null;
    }

    let node: ListNode<T> | null = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

function circular<T>(list: LinkedList<T>) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (slow && fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

const List = LinkedList;

test('circular function is defined', () => {
  expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
  const l = new List();
  const a = new ListNode('a');
  const b = new ListNode('b');
  const c = new ListNode('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  expect(circular(l)).toEqual(true);
});

test('circular detects circular linked lists linked at the head', () => {
  const l = new List();
  const a = new ListNode('a');
  const b = new ListNode('b');
  const c = new ListNode('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  expect(circular(l)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
  const l = new List();
  const a = new ListNode('a');
  const b = new ListNode('b');
  const c = new ListNode('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  expect(circular(l)).toEqual(false);
});
