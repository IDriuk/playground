// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// connect: undefined

function spinWords(s: string){
  return s.split(' ').map( w => w.length >= 5 ? w.split('').reverse().join('') : w).join(' ')
}

test ("revers large words", () => {
  expect(spinWords("Welcome")).toBe("emocleW");
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  expect(spinWords("This is a test")).toBe("This is a test");
  expect(spinWords("This is another test")).toBe("This is rehtona test");
  expect(spinWords("You are almost to the last test")).toBe("You are tsomla to the last test");
  expect(spinWords("Just kidding there is still one more")).toBe("Just gniddik ereht is llits one more");
  expect(spinWords("Seriously this is the last one")).toBe("ylsuoireS this is the last one");
})