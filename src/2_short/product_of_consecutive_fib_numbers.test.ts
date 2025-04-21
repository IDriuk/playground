// Product of consecutive Fib numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
// connect: interesting

// function productFib(prod){
//   let fibs = [0, 1]
  
//   while (true) {
//     let last = fibs.length - 1
//     let m = fibs[last] * fibs[last - 1]
//     if (m == prod) {
//       return [fibs[last -1], fibs[last], true]
//     } else if (m > prod) {
//       return [fibs[last -1], fibs[last], false]
//     }
    
//     fibs.push(fibs[last] + fibs[last - 1])
//   }
// }


function productFib(prod: number){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}  

test("should multiple fibonacci", () => {
  expect(productFib(4895)).toEqual([55, 89, true])
  expect(productFib(5895)).toEqual([89, 144, false])
  expect(productFib(74049690)).toEqual([6765, 10946, true])
  expect(productFib(84049690)).toEqual([10946, 17711, false])
  expect(productFib(193864606)).toEqual([10946, 17711, true])
  expect(productFib(447577)).toEqual([610, 987, false])
  expect(productFib(602070)).toEqual([610, 987, true])
})
