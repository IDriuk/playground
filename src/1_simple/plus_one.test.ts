// Plus One
// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// https://leetcode.com/problems/plus-one/
// connect: interesting

var plusOne = function(digits: number[]) {
  let ar = [...digits].reverse()
  let i = 0
  ar[0]++
  
  while (true){
      if (ar[i] == 10) {
          ar[i] = 0
          ar[i + 1] = ar[i + 1] ? ar[i + 1] + 1 : 1
          i++
      } else {
          break
      }
  }
  
  return ar.reverse()
};

test("Plus one", () => {
  expect(plusOne([1,2,3])).toEqual([1,2,4])
  expect(plusOne([4,3,2,1])).toEqual([4,3,2,2])
  expect(plusOne([9])).toEqual([1,0])
})