// Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait 
// after the ith day to get a warmer temperature. 
// If there is no future day for which this is possible, keep answer[i] == 0 instead.
// https://leetcode.com/problems/daily-temperatures/submissions/
// connect: undefined

var dailyTemperatures = function(T: number[]) {
  let stack = [[T[0], 0]]
  let res = []
  
  for ( let i = 1; i < T.length; i++) {
      let t = T[i]
      for ( let j = stack.length - 1; j >= 0; j--) {
          let [v, index] = stack[j]
          if (t > v) {
              stack.pop()
              res[index] = i - index
          } else { 
              break
          }
      }
      stack.push([T[i], i])
  }
  
  for ( let i = 0; i < stack.length; i++ ) {
      let [v, index] = stack[i]
      res[index] = 0
  }
  
  return res
};

test("get warmer temperature", () => {
  expect(dailyTemperatures([73,74,75,71,69,72,76,73])).toEqual([1,1,4,2,1,1,0,0])
  expect(dailyTemperatures([30,40,50,60])).toEqual([1,1,1,0])
  expect(dailyTemperatures([30,60,90])).toEqual([1,1,0])
})