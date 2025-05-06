// Binary Tree Maximum Path Sum
// A path in a binary tree is a sequence of nodes 
// where each pair of adjacent nodes in the sequence has an edge connecting them. 
// A node can only appear in the sequence at most once. 
// Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any non-empty path.
// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// connect: tree, interesting

// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}



describe('maxPathSum', () => {
  it('should handle a single node', () => {
      // const root = new TreeNode(1);
      // expect(maxPathSum(root)).toBe(1);
  });

  // it('should handle negative values', () => {
  //     const root = new TreeNode(-3);
  //     expect(maxPathSum(root)).toBe(-3);
  // });

  // it('should handle a balanced tree', () => {
  //     //      1
  //     //     / \
  //     //    2   3
  //     const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  //     expect(maxPathSum(root)).toBe(6); // 2 + 1 + 3
  // });

  // it('should handle a tree with negative nodes', () => {
  //     //       -10
  //     //       /  \
  //     //      9   20
  //     //         /  \
  //     //        15   7
  //     const root = new TreeNode(
  //         -10,
  //         new TreeNode(9),
  //         new TreeNode(20, new TreeNode(15), new TreeNode(7))
  //     );
  //     expect(maxPathSum(root)).toBe(42); // 15 + 20 + 7
  // });

  // it('should handle a tree with all negative numbers', () => {
  //     //       -2
  //     //      /   \
  //     //    -1   -3
  //     const root = new TreeNode(-2, new TreeNode(-1), new TreeNode(-3));
  //     expect(maxPathSum(root)).toBe(-1); // The max is the single -1 node
  // });

  // it('should handle a left-skewed tree', () => {
  //     //    1
  //     //   /
  //     //  2
  //     // /
  //     //3
  //     const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
  //     expect(maxPathSum(root)).toBe(6); // 1 + 2 + 3
  // });

  // it('should handle a right-skewed tree', () => {
  //     // 1
  //     //  \
  //     //   2
  //     //    \
  //     //     3
  //     const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
  //     expect(maxPathSum(root)).toBe(6); // 1 + 2 + 3
  // });
});