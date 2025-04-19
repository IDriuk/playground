// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// connect: undefined


function highAndLow(numbers: string){
  let digits = numbers.split(' ').map( x => +x)
  return `${Math.max(...digits)} ${Math.min(...digits)}`
}

test("should return highest and lowest number", () => {
  expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe("42 -9")
  expect(highAndLow("1 2 3")).toBe("3 1")
})