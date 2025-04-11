/*
  324. Wiggle Sort II
  Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
  Note:
  You may assume all input has valid answer.
*/

export function wiggleSort2(nums: number[]) {
  let n = nums.length;
  let median = quickSelect(Math.floor((n + 1) / 2), nums);
  let left = 0;
  let i = 0;
  let right = n - 1;
  while (i <= right) {
    if (nums[newIndex(i, n)] > median) {
      swap(nums, newIndex(left, n), newIndex(i, n));
      left++;
      i++;
    } else if (nums[newIndex(i, n)] < median) {
      swap(nums, newIndex(right, n), newIndex(i, n));
      right--;
    } else {
      i++;
    }
  }
  return nums;
}

function newIndex(i: number, n: number) {
  return (2 * i + 1) % (n | 1);
}

function quickSelect(k: number, nums: number[]) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let pos = l + Math.floor((r - l) / 2);
    pos = partition(nums, l, r, pos);
    if (pos == k) {
      return nums[pos];
    } else if (pos < k) {
      l = pos + 1;
    } else {
      r = pos - 1;
    }
  }
  return nums[l];
}

function partition(nums: number[], l: number, r: number, pivot: number) {
  let val = nums[pivot];
  swap(nums, pivot, r);
  let storeIndex = l;
  for (let i = l; i < r; i++) {
    if (nums[i] < val) {
      swap(nums, storeIndex, i);
      storeIndex++;
    }
  }
  swap(nums, storeIndex, r);
  return storeIndex;
}

function swap(nums: number[], i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
