// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// connect: undefined

function XO(str: string) {
  let obj =  str.toLowerCase().split('').reduce((ac, val) => {
    if ( val == 'x' ) ac.x++
    if ( val == 'o' ) ac.o++
    return ac
  }, {x: 0, o:0} )
  
  return obj.o == obj.x
}

test('check if a string has the same amount of "x"s and "o"s', () => {
  expect(XO('abcd')).toBe(true)
  expect(XO('xo')).toBe(true)
  expect(XO('XO')).toBe(true)
  expect(XO('xxxoo')).toBe(false)
})