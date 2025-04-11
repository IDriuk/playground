/*
  239. Sliding Window Maximum
  Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
  You can only see the k numbers in the window. Each time the sliding window moves right by one position.
  Return the max sliding window.
*/

export function slidingWindowMaximum(nums: number[], k: number) {
  let n = nums.length;
  if (n * k == 0) {
    return [];
  }
  if (k == 1) {
    return nums;
  }
  let left = Array<number>(n);
  left[0] = nums[0];
  let right = Array<number>(n);
  right[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    if (i % k == 0) {
      left[i] = nums[i];
    } else {
      left[i] = Math.max(left[i - 1], nums[i]);
    }

    let j = n - i - 1;
    if ((j + 1) % k == 0) {
      right[j] = nums[j];
    } else {
      right[j] = Math.max(right[j + 1], nums[j]);
    }
  }

  let output = Array<number>(n - k + 1);
  for (let i = 0; i < n - k + 1; i++) {
    output[i] = Math.max(left[i + k - 1], right[i]);
  }

  return output;
}
