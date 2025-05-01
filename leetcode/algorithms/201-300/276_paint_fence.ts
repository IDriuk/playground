/*
  276. Paint Fence
  There is a fence with n posts, each post can be painted with one of the k colors.
  You have to paint all the posts such that no more than two adjacent fence posts have the same color.
  Return the total number of ways you can paint the fence.
  Note: 
  n and k are non-negative integers.
*/

export function paintFence(n: number, k: number) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return k;
  }

  let diffColorCounts = k * (k - 1);
  let sameColorCounts = k;

  for (let i = 2; i < n; i++) {
    let temp = diffColorCounts;
    diffColorCounts = (diffColorCounts + sameColorCounts) * (k - 1);
    sameColorCounts = temp;
  }

  return diffColorCounts + sameColorCounts;
}
