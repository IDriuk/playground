/* 
  75. Sort Colors
  Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent,
  with the colors in the order red, white and blue.

  Here , we will use the integers 0, 1, and 2 to represent the color red, white and blue respectively.

  Note: You are not suppose to use the library's sort function for this problem.
*/

let RED = 0;
let WHITE = 1;
let BLUE = 2;

export function sortColors(colors: number[]): number[] {
  let redEnd = -1;
  let whiteEnd = -1;

  for (let i = 0; i < colors.length; i++) {
    let v = colors[i];
    colors[i] = BLUE;
    if (v == RED) {
      colors[++whiteEnd] = WHITE;
      colors[++redEnd] = RED;
    } else if (v == WHITE) {
      colors[++whiteEnd] = WHITE;
    }
  }

  return colors;
}
