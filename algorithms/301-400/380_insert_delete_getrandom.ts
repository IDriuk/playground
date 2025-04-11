/*
  380. Insert Delete GetRandom O(1)
  Design a data structure that supports all following operations in average O(1) time.
  insert(val): Inserts an item val to the set if not already present.
  remove(val): Removes an item val from the set if present.
  getRandom: Returns a random element from current set of elements.
  Each element must have the same probability of being returned.
*/

export class RandomizedSet {
  nums: number[] = [];
  numToIndex = new Map<number, number>();

  insert = (val: number) => {
    if (this.numToIndex.has(val)) {
      return false;
    }
    this.nums.push(val);
    this.numToIndex.set(val, this.nums.length - 1);
    return true;
  };
  remove = (val: number) => {
    if (!this.numToIndex.has(val)) {
      return false;
    }
    let index = this.numToIndex.get(val)!;
    let lastNum = this.nums[this.nums.length - 1];
    this.numToIndex.set(lastNum, index);
    this.nums[index] = lastNum;
    this.nums.pop();
    this.numToIndex.delete(val);
    return true;
  };
  getRandom = () => {
    return this.nums[~~(Math.random() * this.nums.length)];
  };
}
