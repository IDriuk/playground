// Shortest word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// connect: undefined

function findShort(s: string){
  return s.split(' ').map( s => s.length).reduce((ac, val) => Math.min(ac, val), Infinity)
}

test("should return shortest word length", () => {
  expect(findShort("bitcoin take over the world maybe who knows perhaps")).toBe(3);
  expect(findShort("turns out random test cases are easier than writing out basic ones")).toBe(3); 
  expect(findShort("Let's travel abroad shall we")).toBe(2);
})