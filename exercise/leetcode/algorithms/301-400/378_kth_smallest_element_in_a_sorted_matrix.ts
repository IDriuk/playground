/*
  378. Kth Smallest Element in a Sorted Matrix.
  Given a nxn matrix where each of the rows and columns are sorted in ascending order,
  find the kth smallest element in the matrix.
  Note that it is the kth smallest element in the sorted order, not the kth distinct element.
*/

import FastPriorityQueue from "../201-300/218_the_skyline_problem";
class Element {
  constructor(
    public number: number,
    public row: number,
    public col: number,
  ) {}
}

export function kthSmallestInSortedMatrix(matrix: number[][], k: number) {
  let n = matrix.length;
  let minHeap = new FastPriorityQueue<Element>((a, b) => a.number < b.number);
  for (let i = 0; i < n; i++) {
    minHeap.add(new Element(matrix[0][i], 0, i));
  }
  let res = 0;
  for (let i = 0; i < k; i++) {
    let ele = minHeap.poll()!;
    res = ele.number;
    if (ele.row + 1 < n) {
      minHeap.add(
        new Element(matrix[ele.row + 1][ele.col], ele.row + 1, ele.col),
      );
    }
  }
  return res;
}
