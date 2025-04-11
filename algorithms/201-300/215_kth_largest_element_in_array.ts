/*
  215. Kth Largest Element in an Array
  Find the kth largest element in an unsorted array.
  Note that it is the kth largest element in the sorted order, not the kth distinct element.
*/

let swap = (a: number[], i: number, j: number) => {
  let tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

let partition = (a: number[], lo: number, hi: number) => {
  let pivot = a[hi];
  let i = lo;
  let j = hi - 1;
  while (true) {
    while (i < hi && a[i] > pivot) {
      i++;
    }
    while (j >= lo && a[j] <= pivot) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(a, i, j);
  }
  swap(a, hi, i);
  return i;
};

export function findKthLargest(nums: number[], k: number) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    let r = partition(nums, lo, hi);
    if (r < k - 1) {
      lo = r + 1;
    } else if (r > k - 1) {
      hi = r - 1;
    } else {
      break;
    }
  }
  return nums[k - 1];
}
