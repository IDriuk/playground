/* 
  40. Combination Sum II
  Given a set of candidates numbers (candidates) (Without duplicates) and a target number (target),
  find all unique combinations in candidates where the candidate numbers sums to target.

  Each number in candidates may only be used once in the combination.

  Note:
  All numbers (including target) will be positive integers.
  The solution set must not contain duplicate combinations.
*/
export function combinationSum2(nums: number[], target: number): number[][] {
  if (!nums || nums.length == 0) {
    return [];
  }

  nums.sort((a: number, b: number): number => {
    return a - b;
  });
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
      helper(nums, i + 1, newTarget, combos, res);
      combos.pop();
    } else {
      break;
    }

    while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      i++;
    }
  }
}
