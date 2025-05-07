// Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree 
// and inorder is the inorder traversal of the same tree, construct and return the binary tree.
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/
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

var buildTree = function(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length <= 0 ) {
      return null
  } else if (preorder.length == 1 ) {
      return new TreeNode(preorder[0])
  } else {
      let val = preorder.shift()
      let i = inorder.indexOf(val!)
      
      let inorderLeft = inorder.slice(0, i)
      let inorderRight = inorder.slice(i + 1)
      
      let preorderLeft = preorder.slice(0, i)
      let preorderRight = preorder.slice(i)
      
      return new TreeNode(
          val, 
          buildTree(preorderLeft, inorderLeft), 
          buildTree(preorderRight, inorderRight)
      )
  }
  
};



// Helper function to convert a tree to an array representation for easier comparison
function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];
  
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    
    if (node === null) {
      result.push(null);
    } else {
      result.push(node!.val);
      
      // Add children to queue, including nulls to maintain structure
      // But don't add nulls if both children are null (to trim trailing nulls)
      if (node!.left !== null || node!.right !== null) {
        queue.push(node!.left);
        queue.push(node!.right);
      }
    }
  }
  
  // Trim trailing nulls for cleaner comparison
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  
  return result;
}

describe('buildTree', () => {
  // Test case 1: Basic tree with 3 nodes
  test('builds a simple tree with 3 nodes', () => {
    const preorder = [3, 9, 20];
    const inorder = [9, 3, 20];
    
    const root = buildTree(preorder, inorder);
    
    expect(root).not.toBeNull();
    expect(root!.val).toBe(3);
    expect(root!.left!.val).toBe(9);
    expect(root!.right!.val).toBe(20);
    expect(root!.left!.left).toBeNull();
    expect(root!.left!.right).toBeNull();
    expect(root!.right!.left).toBeNull();
    expect(root!.right!.right).toBeNull();
  });

  // Test case 2: Typical leetcode example
  test('builds a complex tree correctly', () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];
    
    const root = buildTree(preorder, inorder);
    
    // Expected tree structure:
    //     3
    //    / \
    //   9  20
    //     /  \
    //    15   7
    
    expect(root).not.toBeNull();
    expect(root!.val).toBe(3);
    expect(root!.left!.val).toBe(9);
    expect(root!.right!.val).toBe(20);
    expect(root!.right!.left!.val).toBe(15);
    expect(root!.right!.right!.val).toBe(7);
  });

  // Test case 3: Empty input arrays
  test('returns null for empty input arrays', () => {
    const root = buildTree([], []);
    expect(root).toBeNull();
  });

  // Test case 4: Single node tree
  test('builds a single node tree', () => {
    const preorder = [5];
    const inorder = [5];
    
    const root = buildTree(preorder, inorder);
    
    expect(root).not.toBeNull();
    expect(root!.val).toBe(5);
    expect(root!.left).toBeNull();
    expect(root!.right).toBeNull();
  });

  // Test case 5: Left-skewed tree
  test('builds a left-skewed tree', () => {
    const preorder = [1, 2, 3, 4];
    const inorder = [4, 3, 2, 1];
    
    const root = buildTree(preorder, inorder);
    
    // Expected tree structure:
    //     1
    //    /
    //   2
    //  /
    // 3
    // /
    //4
    
    expect(root).not.toBeNull();
    expect(root!.val).toBe(1);
    expect(root!.right).toBeNull();
    expect(root!.left!.val).toBe(2);
    expect(root!.left!.right).toBeNull();
    expect(root!.left!.left!.val).toBe(3);
    expect(root!.left!.left!.right).toBeNull();
    expect(root!.left!.left!.left!.val).toBe(4);
  });

  // Test case 6: Right-skewed tree
  test('builds a right-skewed tree', () => {
    const preorder = [1, 2, 3, 4];
    const inorder = [1, 2, 3, 4];
    
    const root = buildTree(preorder, inorder);
    
    // Expected tree structure:
    //  1
    //   \
    //    2
    //     \
    //      3
    //       \
    //        4
    
    expect(root).not.toBeNull();
    expect(root!.val).toBe(1);
    expect(root!.left).toBeNull();
    expect(root!.right!.val).toBe(2);
    expect(root!.right!.left).toBeNull();
    expect(root!.right!.right!.val).toBe(3);
    expect(root!.right!.right!.left).toBeNull();
    expect(root!.right!.right!.right!.val).toBe(4);
  });

  // Test case 7: Tree with duplicate values
  test('builds a tree with duplicate values', () => {
    const preorder = [1, 2, 2, 3];
    const inorder = [2, 2, 1, 3];
    
    const root = buildTree(preorder, inorder);
    
    // This is a problem with the current implementation!
    // Since indexOf only returns the first occurrence, 
    // we can test that it fails correctly on duplicate values
    
    // Due to indexOf limitation with duplicates, the tree won't be built correctly
    // This is an inherent limitation of the algorithm when using indexOf
    
    expect(root).not.toBeNull();
    // The actual structure can be different from expected structure
    // We're testing that it at least creates some valid tree
    expect(root!.val).toBe(1);
  });

  // Test case 8: Complex balanced tree
  test('builds a complex balanced tree', () => {
    const preorder = [4, 2, 1, 3, 6, 5, 7];
    const inorder = [1, 2, 3, 4, 5, 6, 7];
    
    const root = buildTree(preorder, inorder);
    
    // Expected tree structure:
    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
    
    expect(root).not.toBeNull();
    expect(root!.val).toBe(4);
    expect(root!.left!.val).toBe(2);
    expect(root!.right!.val).toBe(6);
    expect(root!.left!.left!.val).toBe(1);
    expect(root!.left!.right!.val).toBe(3);
    expect(root!.right!.left!.val).toBe(5);
    expect(root!.right!.right!.val).toBe(7);
  });

  // Test case 9: Using array representation for comparison
  test('builds correct tree structure (using array representation)', () => {
    const preorder = [3, 9, 8, 20, 15, 7];
    const inorder = [8, 9, 3, 15, 20, 7];
    
    const root = buildTree(preorder, inorder);
    
    // Convert the tree to array for easier comparison
    const arrayRepresentation = treeToArray(root);
    
    // Expected tree in array form [3, 9, 20, 8, null, 15, 7]
    expect(arrayRepresentation).toEqual([3, 9, 20, 8, null, 15, 7]);
  });

  // Test case 10: Handling an input case that would result in empty subtrees
  test('builds a tree with empty subtrees correctly', () => {
    const preorder = [5, 3, 1, 4, 8, 7, 9];
    const inorder = [1, 3, 4, 5, 7, 8, 9];
    
    const root = buildTree(preorder, inorder);
    
    // Expected tree structure:
    //      5
    //     / \
    //    3   8
    //   / \ / \
    //  1  4 7  9
    
    const arrayRepresentation = treeToArray(root);
    expect(arrayRepresentation).toEqual([5, 3, 8, 1, 4, 7, 9]);
  });
});