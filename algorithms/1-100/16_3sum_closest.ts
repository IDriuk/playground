/* 
  16. 3Sum Closest
  Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
  Return the sum of the three integers you may assume that each input would have exactly one solution.
*/

export function treeSumClosest(num: number[], target: number): number | null {
  if (!num || num.length == 0) {
    return null;
  }

  let closest = 0;
  num.sort();

  for (let i = 0; i < num.length && i < 3; i++) {
    closest += num[i];
  }

  if (num.length < 3) {
    return closest;
  }

  for (let i = 0; i < num.length - 2; i++) {
    let j = i + 1;
    let k = num.length - 1;
    while (j < k) {
      let sum = num[i] + num[j] + num[k];

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        return closest;
      }
    }
  }

  return closest;
}
