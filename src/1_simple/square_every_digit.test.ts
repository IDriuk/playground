// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript
// connect: undefined

function squareDigits(num: number){
  let result = []
  while (num) {
    let digit = num % 10
    num = ~~(num / 10)
    result.unshift(`${digit * digit}`) 
  }
  return +result.join('')
}

/* 
  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
  }
*/

test("should square every digit and concatenate them", () => {
   expect(squareDigits(3212)).toBe(9414);
   expect(squareDigits(2112)).toBe(4114);
   expect(squareDigits(0)).toBe(0);
})