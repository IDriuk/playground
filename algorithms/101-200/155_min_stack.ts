/*
  155. Min Stack
  Design a stack that supports push, pop, top and retrieving the minimum element in constant time.
*/

export class MinStack {
  ar: number[] = [];
  minAr: number[] = [];
  push = (val: number) => {
    let { ar, minAr } = this;
    ar.push(val);
    if (minAr.length == 0 || minAr.at(-1)! > val) {
      minAr.push(val);
    }
  };
  pop = (): number | undefined => {
    let { ar, minAr } = this;
    let res = ar.pop();
    if (minAr.length > 0 && res == minAr.at(-1)) {
      minAr.pop();
    }
    return res;
  };
  top = (): number | undefined => {
    return this.ar.at(-1);
  };
  getMin = (): number | undefined => {
    return this.minAr.at(-1);
  };
}
