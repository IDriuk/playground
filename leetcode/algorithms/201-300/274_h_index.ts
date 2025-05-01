/*
  274. H-Index
  Given an array of citations (each citation is a non-negative integer) of a researcher, 
  write a function to compute the researcher's h-index.

  According to the definition of h-index on Wikipedia:
  "A scientist has index h if h of his/her N papers have at least h citations each, an ther other N - h papers have no more than h citations each."
*/

export function hIndex(citations: number[]) {
  let n = citations.length;
  let papers = Array(n + 1).fill(0);
  for (let c of citations) {
    papers[Math.min(n, c)]++;
  }
  let k = n;
  for (let s = papers[n]; k > s; s += papers[k]) {
    k--;
  }
  return k;
}
