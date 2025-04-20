// Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// connect: undefined

var moveZeros = function (arr: number[]) {
  let count = 0
  let a = arr.filter( x => {
    if (x === 0) {
      count++
      return false
    } else {
      return true
    }
  })
  
  while (count--) {
    a.push(0)
  }
  
  return a
}

/*
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}  
*/

test("should move all of the zeros to the end", () => {
  expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
})