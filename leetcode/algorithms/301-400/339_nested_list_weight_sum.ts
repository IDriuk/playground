/*
  339. Nested List Weight Sum
  Given a nested list of integers, 
  return the sum of all integers in the list weighted by their depth.
  Each element is either an integer, or a list, whose elements may also be integers or other lists.
*/

type NestedArray = (number | NestedArray)[];

export function depthSum(nestedList: NestedArray) {
  return ds(nestedList, 1);
}

function ds(list: NestedArray, depth: number) {
  let sum = 0;
  for (let n of list) {
    if (n instanceof Array) {
      sum += ds(n, depth + 1);
    } else {
      sum += n * depth;
    }
  }
  return sum;
}
