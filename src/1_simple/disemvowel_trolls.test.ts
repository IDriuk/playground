// Disemvowel Trolls
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript
// connect: undefined

function disemvowel(str:string) {
  return str.replace(/[AEIOUaeiou]/gi, '');
}

test("should remove vowel", () => {
  expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!")
})