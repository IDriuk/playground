// Determine whether the array contains any duplicates.
// connect: undefined

var containsDuplicate = function(nums: number[]) {
  const set: Record<number, boolean> = {}
  
  for (let el of nums) {
      if (set[el]) { 
          return true
      } else {
          set[el] = true
      }
  }
  
  return false
};

test("Determine whether the array contains any duplicates.", () => {
  expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false)
  expect(containsDuplicate([1, 1, 2, 3, 4, 5])).toBe(true)
})