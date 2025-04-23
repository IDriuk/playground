/*
  281. Zigzag Iterator

  Given two 1d vectors, implement an iterator to return their elements alternately.
*/

export class ZigzagIterator {
  list: number[][] = [];
  buffer: number[] = [];
  i: number = 0;

  constructor(list: number[][]) {
    this.list = list;
  }

  next = (): number => {
    if (!this.hasNext()) {
      return -1;
    }
    if (this.buffer.length > 0) {
      return this.buffer.shift()!;
    }
    for (let l of this.list) {
      if (this.i < l.length) {
        this.buffer.push(l[this.i]);
      }
    }
    this.i++;
    return this.next();
  };

  hasNext = () => {
    if (this.buffer.length != 0) {
      return true;
    }

    for (let l of this.list) {
      if (this.i < l.length) {
        return true;
      }
    }

    return false;
  };
}
