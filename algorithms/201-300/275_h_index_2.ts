/*
  275. H-Index II
  Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher,
  write a function to compute the researcher's h-index.

  According to the definition of h-index on Wikipedia:
  "A scientist has index h if h of his/her N papers have at least h citations each, an ther other N - h papers have no more than h citations each."

  Note:
  If there are several possible values for h, the maximum one is taken as the h-index.
  Follow up:
  This is a follow up problem to H-index, where citations is now guaranteed to be sorted in ascending order.
  Could you solve it in logarithmic time complexity?
*/

export function hIndex2(citations: number[]) {
  if (citations == null || citations.length == 0) {
    return 0;
  }

  let l = 0;
  let h = citations.length - 1;

  while (l <= h) {
    let m = l + (h - l) / 2;
    if (citations[m] == citations.length - m) {
      return citations[m];
    } else if (citations[m] > citations.length - m) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return citations.length - l;
}
