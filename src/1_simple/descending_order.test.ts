// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript
// connect: undefined

function descendingOrder(n:number){
  return  Number(`${n}`.split('').sort((a:string, b:string) => (Number(b) - Number(a))).join(''))
}

test('should rearrange number to create the highest possible number', () => {
  expect(descendingOrder(123)).toBe(321)
  expect(descendingOrder(42145)).toBe(54421)
  expect(descendingOrder(145263)).toBe(654321)
  expect(descendingOrder(123456789)).toBe(987654321)
})