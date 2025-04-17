// Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// connect: undefined

function duplicateCount(text: string){
  const chars = text.toLowerCase().split('')
  const set: Record<string, number> = {}
  
  for ( let char of chars) {
    if (!set[char]) {
      set[char] = 1
    } else {
      set[char]++
    }
  }
  
  let count = 0
  for ( let c of Object.values(set) ) {
    if ( c > 1 ) {
      count++
    }
  } 
  
  return count
}

test("should count duplicates", () => {
  expect(duplicateCount('abcde')).toBe(0)
  expect(duplicateCount('aabbcde')).toBe(2)
  expect(duplicateCount('aabBcde')).toBe(2)
  expect(duplicateCount('indivisibility')).toBe(1)
  expect(duplicateCount('Indivisibilities')).toBe(2)
  expect(duplicateCount('aA11')).toBe(2)
  expect(duplicateCount('ABBA')).toBe(2)
}) 