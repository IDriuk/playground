// Vowel Count
// Return the number (count) of vowels in the given string.
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// connect: undefined

function getCount(str: string) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  for (let l of str) {
    if (vowels.indexOf(l) >= 0 ) {
      vowelsCount++
    }
  }
  
  
  return vowelsCount;
}

test("number of vowels in the given string", () => {
  expect(getCount("abracadabra")).toBe(5)
})