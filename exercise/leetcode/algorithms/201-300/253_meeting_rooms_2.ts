/*
  253. Meeting Rooms II
  Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
  find the minimum number of conference rooms required.
*/

export function meetingRooms2(intervals: number[][]) {
  if (intervals.length == 0) {
    return 0;
  }

  let start = intervals.map((el) => el[0]).sort((a, b) => a - b);
  let end = intervals.map((el) => el[1]).sort((a, b) => a - b);
  let startPointer = 0;
  let endPointer = 0;
  let usedRooms = 0;

  while (startPointer < intervals.length) {
    if (start[startPointer] >= end[endPointer]) {
      usedRooms--;
      endPointer++;
    }

    usedRooms++;
    startPointer++;
  }

  return usedRooms;
}
