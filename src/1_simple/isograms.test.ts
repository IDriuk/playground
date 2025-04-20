// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// connect: undefined

function isIsogram(str: string){
  let letters = str.toLowerCase().split('')
  const countHash: Record<string, boolean> = {}
  for ( let i = 0; i < letters.length; i++) {
    if (countHash[letters[i]]) { 
      return false
    } else {
      countHash[letters[i]] = true
    }
  }
  return true
}

test("determine isogram", () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true );
  expect(isIsogram("isogram")).toBe(true );
  expect(isIsogram("aba")).toBe(false);
  expect(isIsogram("moOse")).toBe(false);
  expect(isIsogram("isIsogram")).toBe(false );
  expect(isIsogram("")).toBe(true);
})