/*
  119. Pascal's Triangle II
  Given a non-negative index k where k <= 33, return the kth index row of the Pascal's triangle.
  In Pascal's triangle , each number is the sum of the two numbers directly above it.
*/

export function pascalTriangle2(rowIndex: number): number[] {
  let row: number[] = [];
  row.push(1);
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j >= 1; j--) {
      row[j] = row[j - 1] + row[j];
    }
    row.push(1);
  }
  return row;
}
