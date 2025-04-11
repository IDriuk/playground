/*
  55. Jump Game

  Given an array of non-negative integers, you are initially positioned at the first index of the array.

  Each element in the array represents your maximum jump length at that position.

  Determine if you are able to reach the last index
*/

export function getJumps(ar: number[]): boolean {
  if (!ar || !ar.length) {
    return false;
  } else if (ar.length == 1) {
    return true;
  }

  let cur = 0;
  let last = 0;

  for (let i = 0; i < ar.length; i++) {
    if (i > last) {
      last = cur;
      if (last < i) {
        return false;
      }
      if (last >= ar.length) {
        return true;
      }
    }
    cur = Math.max(ar[i] + i, cur);
  }

  return true;
}
