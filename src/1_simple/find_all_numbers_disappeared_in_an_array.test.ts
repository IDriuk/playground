// Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/
// connect: undefined

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums: number[]): number[] => {
  const seq: (number | false)[] = [];

  // Fill with 1 to n
  for (let i = 0; i < nums.length; i++) {
    seq.push(i + 1);
  }

  // Mark seen numbers
  for (const num of nums) {
    seq[num - 1] = false;
  }

  // Collect numbers that were not marked (i.e., disappeared)
  return seq.reduce((acc: number[], val) => {
    if (val !== false) acc.push(val);
    return acc;
  }, []);
};

test("return disappeared numbers", () => {
  expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6])
  expect(findDisappearedNumbers([1,1])).toEqual([2])
})