/*
  398. Random Pick Index
  Given an array of integers with possible duplicates,
  randomly output the index of a given target number.
  You can assume that the given target number must exist in the array.

  Note:
  The array size can be very large.
  Solution that uses too much extra space will not pass the judge.
*/

export class RandomIndex {
  constructor(public nums: number[]) {}
  pick(target: number) {
    let count = 0;
    let index = 0;
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] == target) {
        count++;
        if (Math.floor(Math.random() * count) == 0) {
          index = i;
        }
      }
    }
    return index;
  }
}
