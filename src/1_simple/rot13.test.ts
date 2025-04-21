// Rot13
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// connect: undefined

function rot13(message: string){
  let al = "abcdefghijklm".split('')
  let ar = "nopqrstuvwxyz".split('')
  
  message = message.replace(/[a-z]/gi, v => {
    let letter = v.toLowerCase()
    let isUpper = letter != v
    let leftInd = al.indexOf(letter)
    let rightInd = ar.indexOf(letter)
    if (leftInd >= 0 ) {
      letter = ar[leftInd]
    } else {
      letter =al[rightInd]
    }
    
    return isUpper ? letter.toUpperCase() : letter
  })
  
  return message
}

test("should rotate message", () => {
  expect(rot13("test")).toBe("grfg")
  expect(rot13("Test")).toBe("Grfg")
})