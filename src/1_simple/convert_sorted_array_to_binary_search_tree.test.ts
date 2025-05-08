// Convert Sorted Array to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/submissions/
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

var sortedArrayToBST = function(nums: number[]) {
  if (!nums || nums.length <= 0) return null
  
  let middle = ~~(nums.length / 2)
  let left = nums.slice(0, middle)
  let right = nums.slice(middle + 1)
  let root = new TreeNode(nums[middle])
  
  root.right = sortedArrayToBST(right)
  root.left = sortedArrayToBST(left)
  
  return root
};

var sortedArrayToBST = function(nums: number[]) {
  if (!nums || nums.length <= 0) return null
  
  let middle = ~~(nums.length / 2)
  let left = nums.slice(0, middle)
  let right = nums.slice(middle + 1)
  let root = new TreeNode(nums[middle])
  
  root.right = sortedArrayToBST(right)
  root.left = sortedArrayToBST(left)
  
  return root
};

describe('sortedArrayToBST', () => {
  test('should return null for empty arrays', () => {
    expect(sortedArrayToBST([])).toBeNull();
  });

  test('should handle a single element array', () => {
    const result = sortedArrayToBST([5]);
    expect(result).not.toBeNull();
    expect(result?.val).toBe(5);
    expect(result?.left).toBeNull();
    expect(result?.right).toBeNull();
  });

  test('should create a balanced BST from a sorted array with odd length', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = sortedArrayToBST(nums);
    
    // The root should be the middle element (3)
    expect(result?.val).toBe(3);
    
    // Left subtree should contain [1, 2]
    expect(result?.left?.val).toBe(2);
    expect(result?.left?.left?.val).toBe(1);
    expect(result?.left?.right).toBeNull();
    
    // Right subtree should contain [4, 5]
    expect(result?.right?.val).toBe(5);
    expect(result?.right?.left?.val).toBe(4);
    expect(result?.right?.right).toBeNull(); 
  });

  test('should create a balanced BST from a sorted array with even length', () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const result = sortedArrayToBST(nums);
    
    // The root should be the middle element (4)
    expect(result?.val).toBe(4);
    
    // Left subtree should contain [1, 2, 3]
    expect(result?.left?.val).toBe(2);
    expect(result?.left?.left?.val).toBe(1);
    expect(result?.left?.right?.val).toBe(3);
    
    // Right subtree should contain [5, 6]
    expect(result?.right?.val).toBe(6);
    expect(result?.right?.left?.val).toBe(5);
    expect(result?.right?.right).toBeNull();
  });

  test('should handle negative numbers', () => {
    const nums = [-10, -3, 0, 5, 9];
    const result = sortedArrayToBST(nums);
    
    expect(result?.val).toBe(0);
    expect(result?.left?.val).toBe(-3);
    expect(result?.left?.left?.val).toBe(-10);
    expect(result?.right?.val).toBe(9);
    expect(result?.right?.left?.val).toBe(5);
  });

  test('should maintain BST properties', () => {
    // Helper function to validate BST properties
    function isValidBST(node: TreeNode | null, min = -Infinity, max = Infinity): boolean {
      if (!node) return true;
      
      if (node.val <= min || node.val >= max) return false;
      
      return isValidBST(node.left, min, node.val) && 
             isValidBST(node.right, node.val, max);
    }
    
    const nums = [-10, -3, 0, 5, 9, 13, 17];
    const result = sortedArrayToBST(nums);
    
    expect(isValidBST(result)).toBe(true);
  });

  test('should maintain height balance', () => {
    // Helper function to calculate tree height
    function getHeight(node: TreeNode | null): number {
      if (!node) return 0;
      return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }
    
    // Helper function to check if tree is height-balanced
    function isBalanced(node: TreeNode | null): boolean {
      if (!node) return true;
      
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      
      return Math.abs(leftHeight - rightHeight) <= 1 && 
             isBalanced(node.left) && 
             isBalanced(node.right);
    }
    
    const largeArray = Array.from({ length: 15 }, (_, i) => i);
    const result = sortedArrayToBST(largeArray);
    
    expect(isBalanced(result)).toBe(true);
  });
});