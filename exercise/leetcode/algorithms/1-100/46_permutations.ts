/* 
  46. Permutations
  Given a collection of distinct integers,  return all possible permutations.
*/

export function permutations(nums: number[]): number[][] {
  let res: number[][] = [];

  nums.sort((a, b) => (a - b > 0 ? 1 : -1));

  let swap = (nums: number[], i: number, j: number) => {
    if (i == j) {
      return;
    }

    nums[j] = nums[i] - nums[j];
    nums[i] = nums[i] - nums[j];
    nums[j] = nums[i] + nums[j];
  };

  let dfs = (nums: number[], level: number, res: number[][]) => {
    if (level == nums.length) {
      let ar = [];
      for (let num of nums) {
        ar.push(num);
      }
      res.push(ar);
      return;
    }

    for (let i = level; i < nums.length; i++) {
      swap(nums, level, i);
      dfs(nums, level + 1, res);
      swap(nums, level, i);
    }
  };

  dfs(nums, 0, res);

  return res;
}
