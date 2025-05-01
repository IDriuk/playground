/*
  163. Missing Ranges
  Given a sorted  integer array nums, 
  where the range of elements are in the inclusive range [lower, upper], 
  return its missing ranges.
*/

export function missingRanges(
  nums: number[],
  lower: number,
  upper: number,
): string[] {
  let res: string[] = [];

  if (nums == null || nums.length == 0) {
    res.push(rangeString(lower, upper));
    return res;
  }

  let nextMissing = lower;
  for (let num of nums) {
    if (nextMissing == num - 1) {
      res.push(rangeString(nextMissing, nextMissing));
    } else if (nextMissing < num) {
      res.push(rangeString(nextMissing, num - 1));
    }
    if (num == Infinity) {
      return res;
    }
    nextMissing = num + 1;
  }
  if (nextMissing == upper) {
    res.push(rangeString(nextMissing, nextMissing));
  } else if (nextMissing < upper) {
    res.push(rangeString(nextMissing, upper));
  }

  return res;
}

function rangeString(lower: number, upper: number): string {
  if (lower == upper) {
    return `${lower}`;
  } else {
    return `${lower}->${upper}`;
  }
}
