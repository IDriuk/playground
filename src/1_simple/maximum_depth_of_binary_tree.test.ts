// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// connect: interesting, recursion

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

/**
 * Calculates the maximum depth of a binary tree
 * @param root - The root node of the binary tree
 * @returns The maximum depth of the tree (0 for empty tree)
 */
function maxDepth(root: TreeNode | null): number {
  function countDepth(node: TreeNode | null, count: number): number {
    if (!node) return count;
    
    const nextCount = count + 1;
    const countLeft = node.left ? countDepth(node.left, nextCount) : nextCount;
    const countRight = node.right ? countDepth(node.right, nextCount) : nextCount;
    
    return Math.max(countLeft, countRight);
  }
  
  return countDepth(root, 0);
}

// Test cases for maxDepth function
describe('maxDepth', () => {
  it('should return 0 for empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('should return 1 for single node tree', () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  it('should return correct depth for balanced tree', () => {
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7)
      )
    );
    expect(maxDepth(root)).toBe(3);
  });

  it('should return correct depth for unbalanced tree', () => {
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3,
          new TreeNode(4)
        )
      ),
      null
    );
    expect(maxDepth(root)).toBe(4);
  });

  it('should handle tree with only left children', () => {
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3)
      ),
      null
    );
    expect(maxDepth(root)).toBe(3);
  });

  it('should handle tree with only right children', () => {
    const root = new TreeNode(1,
      null,
      new TreeNode(2,
        null,
        new TreeNode(3)
      )
    );
    expect(maxDepth(root)).toBe(3);
  });
});