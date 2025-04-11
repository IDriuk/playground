/* 
  11. Container With Most Water
  Given an non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
  Note: 
  You may not slant the container and n is at least 2.
  The above vertical lines are represented by array [1 8 6 2 5 4 8 3 7]. In this case, the max area of water (blue section) the container can contain is 49.
*/
export function mostWaterContainer(v: number[]): number {
  let start = 0;
  let end = v.length - 1;
  let max = 0;
  while (start < end) {
    max = Math.max(max, Math.min(v[start], v[end]) * (end - start));
    if (v[start] > v[end]) {
      end--;
    } else {
      start++;
    }
  }
  return max;
}
