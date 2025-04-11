/*
  364. Nested List Weight Sum II
  Given a nested list of integers,
  return the sum of all integers in the list weighted by their depth.
  Each element is either an integer, or a list -- whose elements may also be integers or other lists.
  Different from the previous question where weight is increasing from root to leaf,
  now the weight is defined from bottom up. i.e., the leaf level integers have weight 1,
  and the root level integers have the largest weight.
*/

type NestedList = (number | NestedList)[];

export function depthSumInverse(nestedList: NestedList) {
  return dfs(nestedList, 0);
}

function dfs(nestedList: NestedList, prev: number): number {
  if (nestedList.length == 0) {
    return 0;
  }
  let nextLevel: NestedList = [];
  for (let ni of nestedList) {
    if (typeof ni == "number") {
      prev += ni;
    } else {
      nextLevel = [...nextLevel, ...ni];
    }
  }

  return prev + dfs(nextLevel, prev);
}
