/* 
  42. Trapping rain water

  Given n non-negative integers representing an elevation map where the width of each bar is 1,
  compute how much water it is able to trap after raining.

 */
export function trappingRainWater(h: number[]): number {
  let res = 0;
  let maxL = 0;
  let maxR = 0;
  let l = 0;
  let r = h.length - 1;

  while (l < r) {
    if (h[l] < h[r]) {
      h[l] > maxL ? (maxL = h[l]) : (res += maxL - h[l]);
      l++;
    } else {
      h[r] > maxR ? (maxR = h[r]) : (res += maxR - h[r]);
      r--;
    }
  }

  return res;
}
