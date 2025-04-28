// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
// connect: undefined


class Stack<T> {
  data: T[]

  constructor() {
    this.data = [];
  }

  push(record: T) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue<T> {
  first: Stack<T>
  second: Stack<T>

  constructor() {
    this.first = new Stack<T>();
    this.second = new Stack<T>();
  }

  add(record:T) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop()!);
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop()!);
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop()!);
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop()!);
    }

    return record;
  }
}

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});

test('peek returns, but does not remove, the first value', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  expect(q.peek()).toEqual(1);
  expect(q.peek()).toEqual(1);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
});

