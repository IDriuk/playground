// Vowel Count
// Return the number (count) of vowels in the given string.
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// connect: regex

// function getCount(str: string) {
//   var vowelsCount = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   for (let l of str) {
//     if (vowels.indexOf(l) >= 0 ) {
//       vowelsCount++
//     }
//   }
//   return vowelsCount;
// }

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }

function vowels(str: string) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}





test("number of vowels in the given string", () => {
  expect(vowels("abracadabra")).toBe(5)
})