/*
  356. Line Reflection
  Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.
  Follow up:
  Could you do better than O(n^2) ?
*/

export function isReflected(points: number[][]) {
  let max = -Infinity;
  let min = Infinity;
  let set = new Set<string>();

  for (let p of points) {
    max = Math.max(max, p[0]);
    min = Math.min(min, p[0]);
    set.add(`${p[0]}a${p[1]}`);
  }
  let sum = max + min;
  for (let p of points) {
    if (!set.has(`${sum - p[0]}a${p[1]}`)) {
      return false;
    }
  }
  return true;
}
