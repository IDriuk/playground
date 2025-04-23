/*
  354. Russian Doll Envelopes
  You have a number of envelopes with widths and heights given as a pair of integers (w, h).
  One envelope can fit into another if and only if both the width and height of one envelope is greater 
  than the width and height of the other envelope.
  What is the maximum number of envelopes can you Russian doll? (put one inside other).
  Note: 
  Rotation is not allowed.
*/

export function maxEnvelopes(envelopes: number[][]) {
  if (
    envelopes == null ||
    envelopes.length == 0 ||
    envelopes[0] == null ||
    envelopes[0].length != 2
  ) {
    return 0;
  }

  envelopes.sort((arr1, arr2): number => {
    if (arr1[0] == arr2[0]) {
      return arr2[1] - arr1[1];
    } else {
      return arr1[0] - arr2[0];
    }
  });
  let dp = Array(envelopes.length).fill(0);
  let len = 0;
  for (let envelope of envelopes) {
    for (let i = 0; i <= len; i++) {
      if (dp[i] > envelope[1]) {
        dp[i] = envelope[1];
        break;
      } else if (i == len) {
        dp[len] = envelope[1];
        len++;
        break;
      }
    }
  }
  return len;
}
