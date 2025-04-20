// Maximum subarray sum
// The maximum sum subarray problem consists in finding the maximum sum of 
// a contiguous subsequence in an array or list of integers:
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/solutions/javascript
// connect: interesting, subarray

var maxSequence = function(arr: number[]){
  var currentSum = 0;
  return arr.reduce(function(maxSum, number){
      currentSum = Math.max(currentSum + number, 0);
      return Math.max(currentSum, maxSum);
  }, 0);
}



/*
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
} 
*/

test("should return the maximum sum subarray", () => {
  expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})