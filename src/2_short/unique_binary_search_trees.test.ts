// Unique Binary Search Trees
// Given an integer n, return the number of structurally unique BST's (binary search trees) 
// which has exactly n nodes of unique values from 1 to n.
// https://leetcode.com/problems/unique-binary-search-trees/submissions/
// connect: combinations, interesting


var numTrees = function(n: number) {
  let count = [1, 1]
    
  for (let i = 2; i < n + 1; i++) {
    count[i] = 0
    for (let j = 0; j < i; j++) {
      count[i] += count[j] * count[i - j - 1];
    }
  }

  return count[n];
};

test("unique binary search trees", () => {
  expect(numTrees(3)).toBe(5)
  expect(numTrees(1)).toBe(1)
})