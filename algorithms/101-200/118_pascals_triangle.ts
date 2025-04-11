/*
  118. Pascal's Triangle
  Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
  In Pascal's triangle , each number is the sum of the two numbers directly above it.
*/

export function pascalTriangle(numRows: number): number[][] {
  let triangle: number[][] = [];
  if (numRows == 0) {
    return triangle;
  }

  triangle.push([1]);

  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    let row = [];
    let prevRow = triangle[triangle.length - 1];
    row.push(1);
    for (let j = 1; j < rowNum; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    triangle.push(row);
  }

  return triangle;
}
