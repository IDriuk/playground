/*
  379. Design Phone Directory
  Design a Phone Directory which supports the following operations:
  get: 
  Provide a number which is not assigned to anyone.
  check:
  Check if a number is available or not.
  release:
  Recycle or release a number.
*/

export class PhoneDirectory {
  used = new Set<number>();
  released = new Array<number>();
  constructor(public max: number) {}

  get = () => {
    if (this.used.size == this.max) {
      return -1;
    }
    let ret = this.released.length == 0 ? this.used.size : this.released.pop()!;
    this.used.add(ret);
    return ret;
  };

  check = (n: number) => {
    return !this.used.has(n);
  };

  release = (n: number) => {
    if (this.used.has(n)) {
      this.used.delete(n);
      this.released.push(n);
    }
  };
}
