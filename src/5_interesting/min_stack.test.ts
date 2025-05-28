// Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.
// https://leetcode.com/problems/min-stack/submissions/
// connect: interesting, stack


describe('MinStack', () => {
  // let minStack: MinStack;

  // beforeEach(() => {
  //   minStack = new MinStack();
  // });

  test('push and getMin should return the correct minimum', () => {
    // minStack.push(-2);
    // minStack.push(0);
    // minStack.push(-3);
    // expect(minStack.getMin()).toBe(-3);
  });

  // test('pop should remove the top and update minimum', () => {
  //   minStack.push(-2);
  //   minStack.push(0);
  //   minStack.push(-3);
  //   minStack.pop();
  //   expect(minStack.getMin()).toBe(-2);
  // });

  // test('top should return the correct top value', () => {
  //   minStack.push(1);
  //   minStack.push(2);
  //   expect(minStack.top()).toBe(2);
  //   minStack.pop();
  //   expect(minStack.top()).toBe(1);
  // });

  // test('getMin works with duplicate minimums', () => {
  //   minStack.push(2);
  //   minStack.push(2);
  //   minStack.push(1);
  //   minStack.push(1);
  //   expect(minStack.getMin()).toBe(1);
  //   minStack.pop();
  //   expect(minStack.getMin()).toBe(1);
  //   minStack.pop();
  //   expect(minStack.getMin()).toBe(2);
  // });

});
