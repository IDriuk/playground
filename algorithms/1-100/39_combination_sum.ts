/* 
  39. Combination Sum
  Given a set of candidates numbers (candidates) (Without duplicates) and a target number (target),
  find all unique combinations in candidates where the candidate numbers sums to target.

  The same repeated number may be chosen from candidates unlimited number of times.

  Note:
  All numbers (including target) will be positive integers.
  The solution set must not contain duplicate combinations.
*/
export function combinationSum(nums: number[], target: number): number[][] {
  if (!nums || nums.length == 0) {
    return [];
  }

  nums.sort();
  let res: number[][] = [];

  helper(nums, 0, target, [], res);

  return res;
}

function helper(
  nums: number[],
  pos: number,
  target: number,
  combos: number[],
  res: number[][],
) {
  if (target == 0) {
    res.push([...combos]);
    return;
  }

  for (let i = pos; i < nums.length; i++) {
    let newTarget = target - nums[i];
    if (newTarget >= 0) {
      combos.push(nums[i]);
      helper(nums, i, newTarget, combos, res);
      combos.pop();
    } else {
      break;
    }
  }
}
