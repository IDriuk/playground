/*
  373. Find K Pairs with Smallest Sums
  You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
  Define a pair (u, v) which consists of one element from the first array and one element from the second array.
  Find the k pairs (u1, v1), (u2, v2)... (uk, vk) with the smallest sums.
*/

import FastPriorityQueue from "../201-300/218_the_skyline_problem";

export function kSmallestPairs(nums1: number[], nums2: number[], k: number) {
  let pq = new FastPriorityQueue<number[]>((a, b) => a[0] + a[1] < b[0] + b[1]);
  let res: number[][] = [];
  if (nums1.length == 0 || nums2.length == 0 || k == 0) {
    return res;
  }

  for (let i = 0; i < nums1.length && i < k; i++) {
    pq.add([nums1[i], nums2[0], 0]);
  }

  while (k-- > 0 && !pq.isEmpty()) {
    let cur = pq.poll()!;
    res.push([cur[0], cur[1]]);
    if (cur[2] == nums2.length - 1) {
      continue;
    }
    pq.add([cur[0], nums2[cur[2] + 1], cur[2] + 1]);
  }

  return res;
}
