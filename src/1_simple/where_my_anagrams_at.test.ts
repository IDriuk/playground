// Where my anagrams at?
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none.
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
// connect: undefined

function anagrams(word: string, words: string[]) {
  let s = word.split('').sort().join('')
  let result = words.filter( w => s == w.split('').sort().join(''))
  return result
}

/*  
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
*/

test("should return a list of all anagrams", function() {
  expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa']);
  expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
  expect(anagrams('laser', ['lazing', 'lazy',  'lacer'])).toEqual([]);
});
