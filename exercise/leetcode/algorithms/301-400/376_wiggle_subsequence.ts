/*
  376. Wiggle Subsequence
  A sequence of numbers is called a wiggle sequence 
  if the differences between successive numbers strictly alternate between positive and negative.
  The first difference (if one exists) may be either positive or negative.
  A sequence with fewer than two elements is trivially a wiggle sequence.
  Given a sequence of integers , return the length of the longest subsequence that is a wiggle sequence.
  A subsequence is obtained by deleting some number of elements (eventually also zero) from the original sequence,
  leaving the remaining elements in their original order.
*/

export function wiggleMaxLength(nums: number[]) {
  if (nums.length < 2) {
    return nums.length;
  }
  let prevDiff = nums[1] - nums[0];
  let count = prevDiff != 0 ? 2 : 1;
  for (let i = 2; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
      count++;
      prevDiff = diff;
    }
  }
  return count;
}
