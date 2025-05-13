// Flatten Binary Tree to Linked List
// Given the root of a binary tree, flatten the tree into a "linked list":
// The "linked list" should use the same TreeNode class 
// where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
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

var flatten = function(root: TreeNode) {
    
  flat(root)
  
  function flat (node: TreeNode): TreeNode | undefined {
      if (!node) return
      
      if (!node.left && !node.right) {
          return node
      } else {
          let next
          let right
          if (node.left && node.right) {
              right = node.right
              node.right = node.left
              next = flat(node.right)
              next!.right = right
              next = flat(next!.right)
              node.left = null
          } else if ( node.left ) {
              node.right = node.left
              next = flat(node.right)
              node.left = null
          } else {
              next = flat(node.right!)
          }
          return next
      }
  }
};


// Helper function to convert a binary tree to array representation for easier comparison
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
      
      // We need to add nulls to the queue to properly represent the tree
      queue.push(node!.left);
      queue.push(node!.right);
    }
  }
  
  // Remove trailing nulls for cleaner output
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  
  return result;
}

// Helper function to convert a flattened tree to array for verification
function flattenedTreeToArray(root: TreeNode | null): number[] {
  const result: number[] = [];
  let current = root;
  
  while (current) {
    result.push(current.val);
    // In a flattened tree, all nodes should have null left children
    if (current.left !== null) {
      throw new Error(`Tree is not properly flattened! Node ${current.val} has a left child.`);
    }
    current = current.right;
  }
  
  return result;
}

// Helper function to create a tree from an array
function createTreeFromArray(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;
  
  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  
  while (i < arr.length) {
    const node = queue.shift()!;
    
    // Left child
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i] as number);
      queue.push(node.left);
    }
    i++;
    
    // Right child
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i] as number);
      queue.push(node.right);
    }
    i++;
  }
  
  return root;
}

// Test cases
describe('flatten', () => {
  // Test case 1: Empty tree
  test('should handle empty tree', () => {
    const root = null;
    flatten(root!);
    expect(root).toBeNull();
  });
  
  // Test case 2: Single node tree
  test('should handle single node tree', () => {
    const root = new TreeNode(1);
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual([1]);
    expect(root.left).toBeNull();
  });
  
  // Test case 3: Simple tree with left child only
  test('should flatten tree with left child only', () => {
    const root = new TreeNode(1, new TreeNode(2));
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual([1, 2]);
    expect(root.left).toBeNull();
    expect(root.right!.val).toBe(2);
    expect(root.right!.left).toBeNull();
    expect(root.right!.right).toBeNull();
  });
  
  // Test case 4: Simple tree with right child only
  test('should flatten tree with right child only', () => {
    const root = new TreeNode(1, null, new TreeNode(3));
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual([1, 3]);
    expect(root.left).toBeNull();
    expect(root.right!.val).toBe(3);
    expect(root.right!.left).toBeNull();
    expect(root.right!.right).toBeNull();
  });
  
  // Test case 5: Complete binary tree
  test('should flatten complete binary tree', () => {
    const root = new TreeNode(1, 
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    
    // Verify all left pointers are null
    let current = root;
    while (current) {
      expect(current.left).toBeNull();
      current = current.right!;
    }
  });
  
  // Test case 6: Complex tree with varying depths
  test('should flatten complex tree with varying depths', () => {
    // Tree:
    //      1
    //     / \
    //    2   5
    //   / \   \
    //  3   4   6
    const root = createTreeFromArray([1, 2, 5, 3, 4, null, 6]);
    flatten(root!);
    expect(flattenedTreeToArray(root)).toEqual([1, 2, 3, 4, 5, 6]);
    
    // Verify all left pointers are null
    let current = root;
    while (current) {
      expect(current.left).toBeNull();
      current = current.right;
    }
  });
  
  // Test case 7: Right-skewed tree (already flattened)
  test('should handle already right-skewed tree', () => {
    const root = new TreeNode(1, 
      null, 
      new TreeNode(2, 
        null, 
        new TreeNode(3, 
          null, 
          new TreeNode(4)
        )
      )
    );
    const expectedArray = [1, 2, 3, 4];
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual(expectedArray);
  });
  
  // Test case 8: Left-skewed tree
  test('should flatten left-skewed tree', () => {
    const root = new TreeNode(1, 
      new TreeNode(2, 
        new TreeNode(3, 
          new TreeNode(4)
        )
      )
    );
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual([1, 2, 3, 4]);
    
    // Verify the structure manually
    expect(root.val).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right!.val).toBe(2);
    expect(root.right!.left).toBeNull();
    expect(root.right!.right!.val).toBe(3);
    expect(root.right!.right!.left).toBeNull();
    expect(root.right!.right!.right!.val).toBe(4);
    expect(root.right!.right!.right!.left).toBeNull();
    expect(root.right!.right!.right!.right).toBeNull();
  });
  
  // Test case 9: Zigzag tree
  test('should flatten zigzag tree', () => {
    const root = new TreeNode(1, 
      null,
      new TreeNode(2, 
        new TreeNode(3),
        null
      )
    );
    flatten(root);
    expect(flattenedTreeToArray(root)).toEqual([1, 2, 3]);
  });
  
  // Test case 10: Deep unbalanced tree
  test('should flatten deep unbalanced tree', () => {
    const tree = createTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    flatten(tree!);
    expect(flattenedTreeToArray(tree)).toEqual([5, 4, 11, 7, 2, 8, 13, 4, 1]);
    
    // Verify all left pointers are null
    let current = tree;
    while (current) {
      expect(current.left).toBeNull();
      current = current.right;
    }
  });
});

// Example of how to run a test manually without test runner
function runTest() {
  // Create a tree
  //      1
  //     / \
  //    2   5
  //   / \   \
  //  3   4   6
  const root = new TreeNode(1,
    new TreeNode(2, 
      new TreeNode(3), 
      new TreeNode(4)
    ),
    new TreeNode(5, 
      null, 
      new TreeNode(6)
    )
  );
  
  console.log("Original tree:", treeToArray(root));
  
  // Flatten the tree
  flatten(root);
  
  console.log("Flattened tree array:", flattenedTreeToArray(root));
  
  // Expected result: [1, 2, 3, 4, 5, 6]
  // And all node.left should be null
  
  // Verify structure manually
  let current = root;
  let index = 0;
  const expected = [1, 2, 3, 4, 5, 6];
  let isValid = true;
  
  while (current) {
    if (current.val !== expected[index] || current.left !== null) {
      isValid = false;
      break;
    }
    current = current.right!;
    index++;
  }
  
  console.log("Test passed:", isValid && index === expected.length);
}
