/* 
  46. Permutations II
   Given a collection of numbers that might contain duplicates, return all possible unique permutations.
*/

export function permutations2(nums: number[]): number[][] {
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
      let ar: number[] = [];
      for (let num of nums) {
        ar.push(num);
      }
      res.push(ar);
      return;
    }

    for (let i = level; i < nums.length; i++) {
      // Skip if we have duplicates of current element before
      let skip = false;
      for (let j = level; j < i; j++) {
        if (nums[i] == nums[j]) {
          skip = true;
          break;
        }
      }
      if (skip) {
        continue;
      }
      swap(nums, level, i);
      dfs(nums, level + 1, res);
      swap(nums, level, i);
    }
  };

  dfs(nums, 0, res);

  return res;
}
