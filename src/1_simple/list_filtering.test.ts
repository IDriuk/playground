// List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings 
// and returns a new list with the strings filtered out.
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// connect: undefined

function filter_list(l: (string | number)[]) {
  return l.filter( el => typeof el != 'string')
}

test("should filter out strings", () => {
  expect(filter_list([1,2,'a','b'])).toEqual([1,2])
  expect(filter_list([1,'a','b',0,15])).toEqual([1,0,15])
  expect(filter_list([1,2,'aasf','1','123',123])).toEqual([1,2,123])
})