// Counting Bits
// Given an integer n, return an array ans of length n + 1 
// such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
// https://leetcode.com/problems/counting-bits/
// connect: bits

// @ts-ignore
var countBits = (num: number) => {
  let answer = []
  for ( let i = 0; i <= num; i++) {
      answer.push(i.toString(2).replace(/0/g, '').length)
  }
  return answer
};

// public int[] countBits(int num) {
//   int[] res = new int[num  + 1];
//   for (int i = 0; i <= num; i++) {
//       if (i <= 1) {
//           res[i] = i&1;
//       } else {
//           res[i] = res[i>>1] + (i&1);
//       }
//   }
//   return res;
// }

test("should count bits", () => {
  expect(countBits(2)).toEqual([0, 1, 1])
  expect(countBits(5)).toEqual([0,1,1,2,1,2])
})