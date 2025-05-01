/*
  90. Subsets II
  Given a collection of integers that might contain duplicates, nums , return all possible subsets (the power set).
  Note: The solution set must not contain duplicate subsets.
*/

function backtrack(
  subsets: number[][],
  nums: number[],
  pos: number,
  set: number[],
) {
  subsets.push(Array.from(set));
  for (let i = pos; i < nums.length; i++) {
    if (i != pos && nums[i] == nums[i - 1]) {
      continue;
    }
    set.push(nums[i]);
    backtrack(subsets, nums, i + 1, set);
    set.pop();
  }
}

export function getSubsets2(num: number[]): number[][] {
  if (null == num || num.length == 0) {
    return [];
  }

  let subsets: number[][] = [];

  num.sort((a, b) => a - b);

  backtrack(subsets, num, 0, []);

  return subsets;
}
