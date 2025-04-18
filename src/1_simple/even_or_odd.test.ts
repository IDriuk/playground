// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// connect: undefined

function even_or_odd(number:number) {
  return number % 2 ? "Odd" : "Even"
}

test("return even or odd", () => {
  expect(even_or_odd(2)).toBe("Even")
  expect(even_or_odd(3)).toBe("Odd")
})