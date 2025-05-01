/*
  56. Merge intervals

  Given a collection of intervals, merge all overlapping intervals.

*/

export function mergeIntervals(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let last = res[res.length - 1];
    if (last[1] >= intervals[i][0]) {
      if (last[1] < intervals[i][1]) {
        last[1] = intervals[i][1];
      }
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}
