// Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, 
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// https://leetcode.com/problems/jump-game/
// connect: dp

function canJump(nums: number[]) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }
    return lastPos == 0;
}

test("determine if you can jump", () => {
  expect(canJump([2,3,1,1,4])).toBeTruthy()
  expect(canJump([3,2,1,0,4])).toBeFalsy()
})