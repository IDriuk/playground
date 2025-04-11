/*
  78. Subsets
  Given a set of distinct integers, nums, return all possible subsets ( the power set).
  Note: The solution set must not contain duplicate subsets.
*/

let backtrack = (
  res: number[][],
  nums: number[],
  pos: number,
  subset: number[],
) => {
  if (pos == nums.length) {
    res.push([...subset]);
    return;
  }
  backtrack(res, nums, pos + 1, subset);
  subset.push(nums[pos]);
  backtrack(res, nums, pos + 1, subset);
  subset.pop();
};

export function getSubsets(nums: number[]): number[][] {
  let res: number[][] = [];

  backtrack(res, nums, 0, []);

  return res;
}
