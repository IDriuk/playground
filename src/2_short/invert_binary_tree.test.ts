// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.
// https://leetcode.com/problems/invert-binary-tree/
// connect: tree

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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  
  // Swap left and right nodes
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert subtrees
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
}

// Test cases
describe('invertTree', () => {
  test('should return null for empty tree', () => {
    expect(invertTree(null)).toBeNull();
  });

  test('should invert a single node tree', () => {
    const tree = new TreeNode(1);
    const inverted = invertTree(tree);
    expect(inverted?.val).toBe(1);
    expect(inverted?.left).toBeNull();
    expect(inverted?.right).toBeNull();
  });

  test('should invert a simple binary tree', () => {
    /*
    Original:
        4
       / \
      2   7
     / \ / \
    1  3 6  9
    
    Inverted:
        4
       / \
      7   2
     / \ / \
    9  6 3  1
    */
    const tree = new TreeNode(4,
      new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
      ),
      new TreeNode(7,
        new TreeNode(6),
        new TreeNode(9)
      )
    );

    const inverted = invertTree(tree);
    
    // Check root
    expect(inverted?.val).toBe(4);
    
    // Check first level
    expect(inverted?.left?.val).toBe(7);
    expect(inverted?.right?.val).toBe(2);
    
    // Check second level
    expect(inverted?.left?.left?.val).toBe(9);
    expect(inverted?.left?.right?.val).toBe(6);
    expect(inverted?.right?.left?.val).toBe(3);
    expect(inverted?.right?.right?.val).toBe(1);
  });

  test('should handle asymmetric trees', () => {
    /*
    Original:
        1
       / \
      2   3
     / \
    4   5
    
    Inverted:
        1
       / \
      3   2
         / \
        5   4
    */
    const tree = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(3)
    );

    const inverted = invertTree(tree);
    
    expect(inverted?.val).toBe(1);
    expect(inverted?.left?.val).toBe(3);
    expect(inverted?.right?.val).toBe(2);
    expect(inverted?.right?.left?.val).toBe(5);
    expect(inverted?.right?.right?.val).toBe(4);
    expect(inverted?.left?.left).toBeNull();
    expect(inverted?.left?.right).toBeNull();
  });
});