// Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k, 
// return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// connect: undefined


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

export function kthSmallest(root: TreeNode | null, k: number): number {
  let stack: TreeNode[] = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    if (--k === 0) return root.val;
    root = root.right;
  }

  return 0
}

describe('kthSmallest', () => {
  test('should find the kth smallest element in a BST', () => {
    // Test case 1: Simple BST
    //     3
    //    / \
    //   1   4
    //    \
    //     2
    const root1 = new TreeNode(3);
    root1.left = new TreeNode(1);
    root1.left.right = new TreeNode(2);
    root1.right = new TreeNode(4);
    expect(kthSmallest(root1, 1)).toBe(1);
    expect(kthSmallest(root1, 2)).toBe(2);
    expect(kthSmallest(root1, 3)).toBe(3);
    expect(kthSmallest(root1, 4)).toBe(4);

    // Test case 2: Larger BST
    //        5
    //       / \
    //      3   6
    //     / \
    //    2   4
    //   /
    //  1
    const root2 = new TreeNode(5);
    root2.left = new TreeNode(3);
    root2.right = new TreeNode(6);
    root2.left.left = new TreeNode(2);
    root2.left.right = new TreeNode(4);
    root2.left.left.left = new TreeNode(1);
    expect(kthSmallest(root2, 1)).toBe(1);
    expect(kthSmallest(root2, 3)).toBe(3);
    expect(kthSmallest(root2, 5)).toBe(5);
    expect(kthSmallest(root2, 6)).toBe(6);
 
    // Test case 3: Single node
    const root3 = new TreeNode(1);
    expect(kthSmallest(root3, 1)).toBe(1);

    // Test case 4: Empty tree
    expect(kthSmallest(null, 1)).toBe(0); // Note: The function returns 0 for null root due to val ?? 0
    // If this isn't the desired behavior, the function should be updated to handle null root differently

    // Test case 5: Left-skewed tree
    //   2
    //  /
    // 1
    const root5 = new TreeNode(2);
    root5.left = new TreeNode(1);
    expect(kthSmallest(root5, 1)).toBe(1);
    expect(kthSmallest(root5, 2)).toBe(2);

    // Test case 6: Right-skewed tree
    // 1
    //  \
    //   2
    const root6 = new TreeNode(1);
    root6.right = new TreeNode(2);
    expect(kthSmallest(root6, 2)).toBe(2); 
  });

  test('should handle k larger than tree size', () => {
    // Small tree
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    // This test assumes the function returns 0 when k is too large
    // (due to how the original function is written with val ?? 0)
    expect(kthSmallest(root, 3)).toBe(0);
  });
});