/*
  341. Flatten Nested List Iterator
  Given a nested list of integers, implement an iterator to flatten it.
  Each element is either an integer, or a list -- whose elements may also be integers or other lists.
*/

type NestedArray = (number | NestedArray)[];

export class FlattenIterator {
  stack: NestedArray = [];
  constructor(public list: NestedArray) {
    this.stack = list.reverse();
  }
  flatten = (list: NestedArray) => {
    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  };
  next = (): number => {
    let result = this.hasNext() ? this.stack.pop() : null;
    // @ts-ignore
    return result;
  };
  hasNext = (): boolean => {
    while (
      this.stack.length > 0 &&
      Array.isArray(this.stack[this.stack.length - 1])
    ) {
      let el = this.stack.pop();
      if (Array.isArray(el)) {
        this.flatten(el);
      }
    }
    return this.stack.length > 0;
  };
}
