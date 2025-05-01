/*
  225. Implement Stack using Queues

  Implement the following operations of a stack using queues.
  
  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  empty() -- Return whether the stack is empty
*/

export class Stack {
  q1: number[] = [];
  q2: number[] = [];
  _top: number | undefined;

  push = (x: number) => {
    this.q1.push(x);
    this._top = x;
  };

  pop = () => {
    while (this.q1.length > 1) {
      this._top = this.q1.shift()!;
      this.q2.push(this._top);
    }
    let val = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return val;
  };

  empty = () => {
    return this.q1.length == 0;
  };

  top = () => {
    return this._top;
  };
}
