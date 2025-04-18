// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// connect: undefined

function fakeBin(x:string){
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1")
}

test("make fake binary", () => {
  expect(fakeBin('45385593107843568')).toBe('01011110001100111')
  expect(fakeBin('509321967506747')).toBe('101000111101101')
  expect(fakeBin('366058562030849490134388085')).toBe('011011110000101010000011011')
})