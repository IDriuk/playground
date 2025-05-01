/*
  335. Self Crossing
  You are given an array x of n positive numbers.
  You start at point (0,0) and moves x[0] meters to the north, then x[1] meters to the west, x[2] meters to the south,
  x[3] meters to the east and so on. 
  In other words, after each move your direction changes counter-clockwise.
  Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.
*/

export function selfCrossing(x: number[]) {
  for (let i = 3; i < x.length; i++) {
    if (x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]) {
      return true;
    }
    if (i >= 4) {
      if (x[i - 1] == x[i - 3] && x[i] + x[i - 4] >= x[i - 2]) {
        return true;
      }
    }
    if (i >= 5) {
      if (
        x[i - 2] - x[i - 4] >= 0 &&
        x[i] >= x[i - 2] - x[i - 4] &&
        x[i - 1] >= x[i - 3] - x[i - 5] &&
        x[i - 1] <= x[i - 3]
      ) {
        return true;
      }
    }
  }
  return false;
}
