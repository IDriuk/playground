/* 
  18. 4Sum
  Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? 
  Find all unique quadruplets in the array which gives the sum of target. 
  Note: The solution set must not contain duplicate quadruplets.
*/

export function fourSum(a: number[], target: number): number[][] {
  let res: number[][] = [];
  a.sort((a, b) => {
    return a > b ? 1 : a < b ? -1 : 0;
  });

  for (let i = 0; i < a.length - 3; i++) {
    if (i > 0 && a[i] == a[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < a.length - 2; j++) {
      if (j > i + 1 && a[j] == a[j - 1]) {
        continue;
      }

      let lo = j + 1;
      let hi = a.length - 1;

      while (lo < hi) {
        if (lo > j + 1 && a[lo] == a[lo - 1]) {
          lo++;
          continue;
        }
        if (hi < a.length - 1 && a[hi] == a[hi + 1]) {
          hi--;
          continue;
        }
        let sum = a[i] + a[j] + a[lo] + a[hi];

        if (sum > target) {
          hi--;
        } else if (sum < target) {
          lo++;
        } else {
          res.push([a[i], a[j], a[lo], a[hi]]);
          hi--;
          lo++;
        }
      }
    }
  }

  return res;
}
