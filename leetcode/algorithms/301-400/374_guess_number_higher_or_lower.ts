/* 
  374. Guess Number Higher or Lower
  We are playing the Guess Game. The game is as follows:
  I pick a number from 1 to n. You have to guess which number I picked.
  Every time you guess wrong, I'll tell you whether the number is higher or lower.
  You call a pre-defined API guess which returns 3 possible results (-1, 1, or 0)
  -1; My number is lower
  1: My number is higher
  0: Congrats! You got it!
*/

/**
 * Definition for guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is lower than the guess number
 *               1 if num is higher than the guess number
 *               otherwise return 0
 * var guess = function(num: number): number {};
 */

export function guessNumber(n: number): number {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // should never reach here if the guess API is correct
}

function guess(val: number) {
  if (val == 5) {
    return 0;
  } else if (val < 5) {
    return 1;
  } else {
    return -1;
  }
}
