/*
  390. Elimination Game
  There is a list of sorted integers from 1 to n.
  Starting from left to right, 
  remove the first number and every other number afterward until you reach the end of the list.
  Repeat the previous step again, but this time from right to left,
  remove the right most number and every other number from the remaining numbers.
  We keep repeating the steps again, alternating left to right and right to left, until a single number remains.
  Find the last number that remains starting with a list of length n.
*/

export function lastRemaining(n: number) {
  let start = 1;
  let step = 2;
  let len = n;
  let isFromLeft = true;
  while (len != 1) {
    len >>= 1;
    if (isFromLeft) {
      start = start + step * len - (step >> 1);
    } else {
      start = start - step * len + (step >> 1);
    }
    step <<= 1;
    isFromLeft = !isFromLeft;
  }
  return start;
}
