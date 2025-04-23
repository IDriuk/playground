/*
  232. Implement Queue using Stacks
  Implement the following operations of a queue using stacks.
  push(x) -- Push element x to the back of queue.
  pop() -- Removes the element from in front of queue.
  peek() -- Get the front element.
  empty() -- Return whether the queue is empty.
*/

export class Queue {
  front?: number;
  s1: number[] = [];
  s2: number[] = [];

  push = (x: number) => {
    if (this.s1.length == 0) {
      this.front = x;
    }
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop()!);
    }
    this.s2.push(x);
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop()!);
    }
  };

  pop = () => {
    let res = this.s1.pop();
    if (this.s1.length > 0) {
      this.front = this.s1.at(-1);
    } else {
      this.front = undefined;
    }
    return res;
  };

  empty = () => {
    return this.s1.length == 0;
  };

  peek = () => {
    return this.s1.at(-1);
  };
}
