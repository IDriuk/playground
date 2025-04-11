/*
  315. Count of Smaller Numbers After Self
  You are given an integer array nums and you have to return a new counts array.
  The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
*/

class TreeNode {
  left?: TreeNode;
  right?: TreeNode;
  dup = 1;
  sum = 0;
  val = 0;
  constructor(v: number, s: number) {
    this.val = v;
    this.sum = s;
  }
}

export function countSmaller(nums: number[]) {
  let ans = new Array<number>(nums.length).fill(0);
  let root: TreeNode | null = null;
  for (let i = nums.length - 1; i >= 0; i--) {
    root = insert(nums[i], root, ans, i, 0);
  }
  return ans;
}

function insert(
  num: number,
  node: TreeNode | null | undefined,
  ans: number[],
  i: number,
  preSum: number,
): TreeNode {
  if (node == null) {
    node = new TreeNode(num, 0);
    ans[i] = preSum;
  } else if (node.val == num) {
    node.dup++;
    ans[i] = preSum + node.sum;
  } else if (node.val > num) {
    node.sum++;
    node.left = insert(num, node.left, ans, i, preSum);
  } else {
    node.right = insert(num, node.right, ans, i, preSum + node.dup + node.sum);
  }
  return node;
}
