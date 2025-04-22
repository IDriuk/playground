// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// connect: regex, interesting

// function pigIt(str){
//   return str.replace(/\w+/g, (v) => {
//     let ar = v.split('')
//     let first = ar.shift()
//     ar.push(first)
//     return ar.join('') + 'ay'
//   })
// }

// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

// function pigIt(str){
//   //Code here
//   return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
// }

const pigIt = (s: string) => s.replace(/(\w)(\w*)/g, '\$2\$1ay');

test("pig latin", () => {
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay")
  expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay")
})
