/*
  360. Sort Transformed Array
  Given a sorted array of integers nums and integer values a, b and c.
  Apply a quadratic function of the form f(x) = ax2 + bx + c to each element x in the array.
  The returned array must be in sorted order.
  Expected time complexity: O(n)
*/

export function sortTransformedArray(
  nums: number[],
  a: number,
  b: number,
  c: number,
) {
  let n = nums.length;
  let sorted: number[] = Array(n).fill(0);
  let i = 0;
  let j = n - 1;
  let index = a >= 0 ? n - 1 : 0;

  while (i <= j) {
    if (a >= 0) {
      sorted[index--] =
        quad(nums[i], a, b, c) > quad(nums[j], a, b, c)
          ? quad(nums[i++], a, b, c)
          : quad(nums[j--], a, b, c);
    } else {
      sorted[index++] =
        quad(nums[i], a, b, c) > quad(nums[j], a, b, c)
          ? quad(nums[j--], a, b, c)
          : quad(nums[i++], a, b, c);
    }
  }

  return sorted;
}

function quad(x: number, a: number, b: number, c: number) {
  return a * x * x + b * x + c;
}
