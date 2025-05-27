// Merge Two Binary Trees
// You are given two binary trees t1 and t2.
// Write a function to merge them into a new binary tree:
// If two nodes overlap, sum their values and merge the child nodes recursively.
// If only one node exists at a position (i.e. the other node is null), use the existing node as part of the merged tree.
// The merge should be done in-place, modifying and returning the first tree t1.
// connect: undefined

// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// MergeTrees function
function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
}

// Test cases
describe('mergeTrees', () => {
  // Helper function to create a tree from an array (level-order traversal)
  function createTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0] as number);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const current = queue.shift()!;

      if (i < arr.length && arr[i] !== null) {
        current.left = new TreeNode(arr[i] as number);
        queue.push(current.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i] as number);
        queue.push(current.right);
      }
      i++;
    }

    return root;
  }

  // Helper function to convert tree to array (level-order traversal)
  function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];

    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }

    // Remove trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }

    return result;
  }

  it('should merge two simple trees', () => {
    const tree1 = createTree([1, 3, 2, 5]);
    const tree2 = createTree([2, 1, 3, null, 4, null, 7]);
    const merged = mergeTrees(tree1, tree2);
    expect(treeToArray(merged)).toEqual([3, 4, 5, 5, 4, null, 7]);
  });

  it('should return the other tree when one is null', () => {
    const tree1 = createTree([1, 2, 3]);
    const tree2 = null;
    const merged1 = mergeTrees(tree1, tree2);
    expect(treeToArray(merged1)).toEqual([1, 2, 3]);

    const merged2 = mergeTrees(tree2, tree1);
    expect(treeToArray(merged2)).toEqual([1, 2, 3]);
  });

  it('should handle empty trees', () => {
    const merged = mergeTrees(null, null);
    expect(merged).toBeNull();
  });

  it('should merge trees with negative values', () => {
    const tree1 = createTree([-1, -2, -3]);
    const tree2 = createTree([1, 2, 3]);
    const merged = mergeTrees(tree1, tree2);
    expect(treeToArray(merged)).toEqual([0, 0, 0]);
  });


});