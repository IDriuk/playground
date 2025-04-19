// Get the Middle Character
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string. 
// If the string's length is odd, return the middle character. 
// If the string's length is even, return the middle 2 characters.
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// connect: undefined

function getMiddle(s: string)
{
  let ar = s.split('')
  let isOdd = ar.length % 2
  let half = ar.length / 2

  
  if (isOdd) {
    return ar[~~half]
  } else {
    return [ar[half -1], ...ar[half]].join('')
  }
  
}

test("get middle character", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("middle")).toBe("dd");
  expect(getMiddle("A")).toBe("A");
})