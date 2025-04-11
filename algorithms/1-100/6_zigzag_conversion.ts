/* 
  6. Zigzag Сonversion

  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
  you may want to display this pattern in a fixed font for better legibility.
  And then read line by line:
  "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows.
*/
export function zigzag(s: string, numRows: number) {
  let ar = s.split("");
  let zig: string[][] = Array(numRows)
    .fill(null)
    .map(() => []);

  while (ar.length > 0) {
    for (let i = 0; i < numRows; i++) {
      let ch = ar.shift();
      if (ch) {
        zig[i].push(ch);
      }
    }
    for (let i = numRows - 2; i > 0; i--) {
      let ch = ar.shift();
      if (ch) {
        zig[i].push(ch);
      }
    }
  }

  return zig.reduce((ac, ar) => {
    return ac + ar.join("");
  }, "");
}
