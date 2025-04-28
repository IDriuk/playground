// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// @ts-ignore
class Queue<T> {
  data: T[]
  constructor() {
    this.data = [];
  }

  add(record: T) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
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