/*
  45. Jump Game II

  Given an array of non-negative integers, you are initially positioned at the first index of the array.

  Each element in the array represents your maximum jump length at that position.

  Your goal is to reach the last index in the minimum number of jumps.

  Example:
  Input: [2, 3, 1, 1, 4]
  Output: 2
  Explanation: 
  The minimum number of jumps to reach the last index is 2.
  Jump 1 step from index 0 to 1, then 3 steps to the last index.

  Note:
  You can assume that you can always reach the last index.
*/

export function getJumps2(ar: number[]): number {
  let cur = 0;
  let last = 0;
  let steps = 0;

  for (let i = 0; i < ar.length; i++) {
    if (i > last) {
      last = cur;
      steps++;
      if (last >= ar.length) {
        return steps;
      }
    }
    cur = Math.max(ar[i] + i, cur);
  }

  return steps;
}
