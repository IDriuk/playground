// Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier"
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
// connect: undefined

function findOutlier(integers: number[]){
  let odds = []
  let evens = []
  
  for ( let v of integers) {
    if ( v % 2 ) {
      odds.push(v)
    } else {
      evens.push(v)
    }
  }
  
  return odds.length > 1 ? evens[0] : odds[0]
}

test('find outlier', () => {
  expect(findOutlier([0, 1, 2])).toBe(1)
  expect(findOutlier([1, 2, 3])).toBe(2)
  expect(findOutlier([2,6,8,10,3])).toBe(3)
})