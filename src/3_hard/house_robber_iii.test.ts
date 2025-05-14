// House Robber III
// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.
// Besides the root, each house has one and only one parent house. After a tour, 
// the smart thief realized that all houses in this place form a binary tree. 
// It will automatically contact the police if two directly-linked houses were broken into on the same night.
// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.
// https://leetcode.com/problems/house-robber-iii/solution/
// connect: recursion, tree, memoize

// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val ?? 0;
      this.left = left ?? null;
      this.right = right ?? null;
  }
}

var rob = function(root: TreeNode | null) {
  
  let countRob = memoize(helper)
  
  return countRob(root, false)
  
  function helper(node: TreeNode | null, parentRobbed: boolean) {
      if (!node) {
          return 0
      }
      
      if (parentRobbed) {
          let result: number = helper(node.left, false) + helper(node.right, false)
          return result
      } else {
          let rob = node.val + helper(node.left, true) + helper(node.right, true)
          let notRob = helper(node.left, false) + helper(node.right, false)
          let result = Math.max(rob, notRob)
          return result
      }
  }

  function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
  
    return function (...args: Parameters<T>): ReturnType<T> {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key)!;
      }
  
      const result = fn(...args);
      cache.set(key, result);
      return result;
    } as T;
  }

};

// Test cases
describe("rob function tests", () => {
  it("should return 0 for an empty tree", () => {
    expect(rob(null)).toBe(0);
  });

  it("should return the value of a single node tree", () => {
    const root = new TreeNode(10);
    expect(rob(root)).toBe(10);
  });

  it("should return the maximum value for a tree with two levels", () => {
    const root = new TreeNode(3, new TreeNode(2), new TreeNode(3));
    expect(rob(root)).toBe(5); 
  });

  it("should return the maximum value for a tree with three levels", () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(3)),
      new TreeNode(5, null, new TreeNode(1))
    );
    expect(rob(root)).toBe(9); 
  });

  it("should handle a left-skewed tree", () => {
    const root = new TreeNode(3, new TreeNode(2, new TreeNode(3)), null);
    expect(rob(root)).toBe(6); 
  });

  it("should handle a right-skewed tree", () => {
    const root = new TreeNode(3, null, new TreeNode(2, null, new TreeNode(3)));
    expect(rob(root)).toBe(6); 
  });

  it("should handle a tree with all nodes having the same value", () => {
    const root = new TreeNode(
      1,
      new TreeNode(1, new TreeNode(1), new TreeNode(1)),
      new TreeNode(1, new TreeNode(1), new TreeNode(1))
    );
    expect(rob(root)).toBe(5); 
  });
});