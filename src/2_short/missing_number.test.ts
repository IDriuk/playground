// Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
// https://leetcode.com/problems/missing-number/submissions/
// connect: bits, interesting

var missingNumber = function(nums: number[]) {
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};

test( "missing number", () => {
  expect(missingNumber([3,0,1])).toBe(2)
  expect(missingNumber([0,1])).toBe(2)
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8)
})