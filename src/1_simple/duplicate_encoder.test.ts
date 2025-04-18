// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// connect: undefined

function duplicateEncode(word: string){
  let w = word.toLowerCase().split('')
  let counts: Record<string,number> = {}
  for ( let l of w) {
    if (!counts[l]) {
      counts[l] = 1
    } else {
      counts[l]++
    }
  }

  let result = []
  
  for ( let l of w) {
    if (counts[l] > 1) {
      result.push(")")
    } else {
      result.push("(")
    }
  }

  return result.join('')
}

test("should return determining if a character is a duplicate", () => {
  expect(duplicateEncode('din')).toBe('(((')
  expect(duplicateEncode('recede')).toBe('()()()')
  expect(duplicateEncode('Success')).toBe(')())())')
  expect(duplicateEncode('(( @')).toBe('))((')
})