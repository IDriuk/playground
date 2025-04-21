// Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// connect: regex

function alphabetPosition(text: string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/[a-z]/g, m => `${alphabet.indexOf(m) + 1} `)
    .trim()
}


/*
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
} 
 */

test("should replace characters with position in alphabet", () => {
  expect(alphabetPosition("The sunset sets at twelve o' clock."))
  .toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
  expect(alphabetPosition("The narwhal bacons at midnight."))
  .toBe("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
})