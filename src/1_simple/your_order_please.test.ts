// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// connect: undefined

function order(words: string){
  return words.split(' ').sort( (a, b) => Number(a.match(/\d/g)![0]) - Number(b.match(/\d/g)![0]) ).join(' ')
}

test("should return in order", () => {
  expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est")
  expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople")
  expect(order("")).toBe("")
})