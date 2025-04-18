// Equal Sides Of An Array
// You are going to be given an array of integers. Your job is to take that array 
// and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// connect: interesting

function findEvenIndex(arr: number[]) {
  if (arr.length == 0) return 0
  
  let leftSum = 0
  let rightSum = arr.slice(1).reduce( (ac, el) => ac + el, 0)
  
  for ( let i = 0; i < arr.length; i++) {
    if ( leftSum == rightSum) {
      return i
    } else if ( i + 1 < arr.length ) {
      leftSum += arr[i]
      rightSum -= arr[i + 1]
    }
  }
  
  return -1
}

test("find even index", () => {
  expect(findEvenIndex([1,2,3,4,3,2,1])).toBe(3)
  expect(findEvenIndex([1,100,50,-51,1,1])).toBe(1)
  expect(findEvenIndex([1,2,3,4,5,6])).toBe(-1)
  expect(findEvenIndex([20,10,30,10,10,15,35])).toBe(3)
})