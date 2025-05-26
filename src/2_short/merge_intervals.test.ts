// Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.
// https://leetcode.com/problems/merge-intervals/
// connect: interesting, intervals

var mergeIntervals = function(intervals: number[][]) {
  let starts: number[] = []
  let ends: number[] = []
  
  for( let el of intervals) {
      starts.push(el[0])
      ends.push(el[1])
  }
  
  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)
  
  let res = []
  
  while (starts.length && ends.length) {
      let start = starts.shift()
      let end = ends.shift()!
      let nextStart = starts[0]
      
      while ( nextStart <= end ) {
          starts.shift()
          nextStart = starts[0]
          end = Math.max(end, ends.shift()!)   
      }
      
      res.push([start, end])
  }
  
  return res
};

test("merge intervals", () => {
  expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]])
  expect(mergeIntervals([[1,4],[4,5]])).toEqual([[1,5]])
})