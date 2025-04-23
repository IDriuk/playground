/* 
  15. 3Sum
  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero.
  
  Note:
  The solution set must not contain duplicate triplets.
*/

export function treeSum(ar: number[]): number[][] {
  if (ar.length < 3) {
    return [];
  }

  let res: number[][] = [];

  ar.sort();

  for (let i = 0; i < ar.length - 2; i++) {
    if (ar[i] > 0) {
      break;
    }

    if (i > 0 && ar[i] == ar[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = ar.length - 1;
    while (j < k) {
      if (ar[i] + ar[j] > 0) {
        break;
      }
      if (j > i + 1 && ar[j] == ar[j - 1]) {
        continue;
      }

      let sum = ar[i] + ar[j] + ar[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        res.push([ar[i], ar[j], ar[k]]);
        j++;
        k--;
      }
    }
  }

  return res;
}
