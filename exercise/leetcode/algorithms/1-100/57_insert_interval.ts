/*
  57. Insert Interval

  Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

  You may assume that the intervals were initially sorted according to their start times.
*/

export function insertInterval(ar: number[][], interval: number[]): number[][] {
  let i = 0;
  let size = ar.length;

  while (i < size && ar[i][1] < interval[0]) {
    i++;
  }

  while (i < size && ar[i][0] <= interval[1]) {
    interval[0] = Math.min(interval[0], ar[i][0]);
    interval[1] = Math.max(interval[1], ar[i][1]);
    ar.splice(i, 1);
    size--;
  }

  ar.splice(i, 0, interval);
  return ar;
}
