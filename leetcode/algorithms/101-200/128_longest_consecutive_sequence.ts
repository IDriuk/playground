/*
  128. Longest Consecutive Sequence
  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
  Your algorithm should run in O(n) complexity.
*/

export function longestConsecutiveSequence(nums: number[]): number {
  let numSet: Set<number> = new Set<number>(nums);
  let longestStreak = 0;

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}
