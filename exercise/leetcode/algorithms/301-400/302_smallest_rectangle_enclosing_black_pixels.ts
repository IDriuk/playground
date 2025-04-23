/*
  302. Smallest Rectangle Enclosing Black Pixels
  An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel.
  The black pixels are connected , i.e., there is only one black region.
  Pixels are connected horizontally and vertically.
  Given the location (x, y) of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.
*/

export function rectangleEnclosingPixels(
  image: string[][],
  x: number,
  y: number,
) {
  let m = image.length;
  let n = image[0].length;
  let left = searchColumns(image, 0, y, 0, m, true);
  let right = searchColumns(image, y + 1, n, 0, m, false);
  let top = searchRows(image, 0, x, left, right, true);
  let bottom = searchRows(image, x + 1, m, left, right, false);
  return (right - left) * (bottom - top);
}

function searchColumns(
  image: string[][],
  i: number,
  j: number,
  top: number,
  bottom: number,
  whiteToBlack: boolean,
) {
  while (i != j) {
    let k = top;
    let mid = Math.floor((i + j) / 2);
    while (k < bottom && image[k][mid] == "0") {
      ++k;
    }
    if (k < bottom == whiteToBlack) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return i;
}

function searchRows(
  image: string[][],
  i: number,
  j: number,
  left: number,
  right: number,
  whiteToBlack: boolean,
) {
  while (i != j) {
    let k = left;
    let mid = Math.floor((i + j) / 2);
    while (k < right && image[mid][k] == "0") {
      ++k;
    }
    if (k < right == whiteToBlack) {
      j = mid;
    } else {
      i = mid + 1;
    }
  }
  return i;
}
