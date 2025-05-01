/*
  223. Rectangle Area
  Find the total area covered by two rectilinear rectangles in a 2D plane.

  Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

  Note:
  Assume that the total area is never beyond the maximum possible value of int.
*/

export function rectangleArea(
  A: number,
  B: number,
  C: number,
  D: number,
  E: number,
  F: number,
  G: number,
  H: number,
) {
  let areaA = (C - A) * (D - B);
  let areaB = (G - E) * (H - F);

  let left = Math.max(A, E);
  let right = Math.min(C, G);
  let bottom = Math.max(B, F);
  let top = Math.min(D, H);

  let overlap = 0;
  if (right > left && top > bottom) {
    overlap = (right - left) * (top - bottom);
  }

  return areaA + areaB - overlap;
}
