/*
  84. Largest Rectangle in Histogram
  Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
  find the area of largest rectangle in the histogram.
*/

export function largestRectangleInHistogram(heights: number[]): number {
  let stack = [];
  stack.push(-1);
  let maxarea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (
      stack[stack.length - 1] != -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      maxarea = Math.max(
        maxarea,
        heights[stack.pop()!] * (i - stack[stack.length - 1] - 1),
      );
    }
    stack.push(i);
  }

  while (stack[stack.length - 1] != -1) {
    maxarea = Math.max(
      maxarea,
      heights[stack.pop()!] * (heights.length - stack[stack.length - 1] - 1),
    );
  }

  return maxarea;
}
