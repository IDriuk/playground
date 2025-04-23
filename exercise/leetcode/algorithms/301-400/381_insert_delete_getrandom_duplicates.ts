/*
  381. Insert Delete GetRandom O(1) - Duplicates allowed.
  Design a data structure that supports all following operations in average O(1) time.
  Note: Duplicate elements are allowed.
  insert(val): Inserts an item val to the collection.
  remove(val): Removes an item val from the collection if present.
  getRandom: Returns a random element from current collection of elements.
  The probability of each element being returned is linearly related to the number of same value the collection contains.
*/

export class RandomizedCollection {
  nums: number[] = [];
  locs = new Map<number, Set<number>>();

  insert = (val: number) => {
    let contain = this.locs.has(val);
    if (!contain) {
      this.locs.set(val, new Set<number>());
    }
    this.locs.get(val)!.add(this.nums.length);
    this.nums.push(val);
    return true;
  };
  remove = (val: number) => {
    if (!this.locs.has(val)) {
      return false;
    }
    let pos = this.locs.get(val)!.values().next().value!;
    this.locs.get(val)?.delete(pos);
    if (this.locs.get(val)!.size == 0) {
      this.locs.delete(val);
    }
    let last = this.nums.length - 1;
    if (pos < last) {
      let lastNum = this.nums[last];
      this.nums[pos] = lastNum;
      this.locs.get(lastNum)!.delete(last);
      this.locs.get(lastNum)!.add(pos);
    }
    this.nums.pop();
    return true;
  };
  getRandom = () => {
    return this.nums[~~(Math.random() * this.nums.length)];
  };
}
