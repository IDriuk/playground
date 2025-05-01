// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.
// connect: queue

class Queu1<T> {
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

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave<T>(sourceOne: Queu1<T>, sourceTwo: Queu1<T>) {
  const q = new Queu1();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

test('queues have a peek function', () => {
  const q = new Queu1();
  expect(typeof q.peek).toEqual('function');
});

test('peek returns, but does not remove, the first value', () => {
  const q = new Queu1();
  q.add(1);
  q.add(2);
  expect(q.peek()).toEqual(1);
  expect(q.peek()).toEqual(1);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
});

test('weave is a function', () => {
  expect(typeof weave).toEqual('function');
});

test('weave can combine two queues', () => {
  const one = new Queu1();
  one.add(1);
  one.add(2);
  one.add(3);
  one.add(4);
  const two = new Queu1();
  two.add('one');
  two.add('two');
  two.add('three');
  two.add('four');

  const result = weave(one, two);
  expect(result.remove()).toEqual(1);
  expect(result.remove()).toEqual('one');
  expect(result.remove()).toEqual(2);
  expect(result.remove()).toEqual('two');
  expect(result.remove()).toEqual(3);
  expect(result.remove()).toEqual('three');
  expect(result.remove()).toEqual(4);
  expect(result.remove()).toEqual('four');
  expect(result.remove()).toBeUndefined();
});

