// Sum of pairs
// Given a list of integers and a single sum value, 
// return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
// connect: interesting, set

// var sum_pairs=function(ints, s){
//   let set = {}
//   for ( let i = 0; i < ints.length; i++) {
//     if ( !set[ints[i]] ) {
//       set[ints[i]] = `${i}`
//     }
//   }

//   let minIndex = Infinity
//   let result
  
//   for (let i = 0; i < ints.length; i++) {
//     let pair = s - ints[i]
//     if (set[pair]) {
//       let pairIndex = +set[pair]
//       if (pairIndex != i) {
//         let maxIndex = Math.max(pairIndex, i)
//         if ( maxIndex < minIndex ) {
//           minIndex = maxIndex
//           result = [ints[i], pair]
//         }
//       }
//     }
//   }
  
//   return result
// }


var sumPairs=function(ints: number[], s: number){
  var seen: Record<number, boolean> = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
} 

test("sould return pair equal to sum", () => {
  expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7]);
  expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6]);
  expect(sumPairs([20, -13, 40], -7)).toEqual(undefined);
  expect(sumPairs([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1]);
  expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7]);
  expect(sumPairs([4, -2, 3, 3, 4], 8)).toEqual([4, 4]);
  expect(sumPairs([0, 2, 0], 0)).toEqual([0, 0]);
  expect(sumPairs([5, 9, 13, -3], 10)).toEqual([13, -3]);
})
