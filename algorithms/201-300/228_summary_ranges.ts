/*
  228. Summary Ranges
  Given a sorted integer array without duplicates, return the summary of its ranges.
*/

export function summaryRanges(nums: number[]) {
  let summary: string[] = [];
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (j + 1 < nums.length && nums[j + 1] == nums[j] + 1) {
      continue;
    }
    if (i == j) {
      summary.push(`${nums[i]}`);
    } else {
      summary.push(`${nums[i]}->${nums[j]}`);
    }
    i = j + 1;
  }

  return summary;
}
