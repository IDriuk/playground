// String incrementer
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// connect: regex

// function incrementString (str) {
//   if ( !/\d/.test(str)) { return str + '1'}
  
//   return str.replace(/\d+/, val => {
//     let d = (+val + 1).toString()
//     let dif = val.length - d.length
//     while (dif > 0) {
//       d = `0${d}`
//       dif--
//     } 

//     return d
//   })
// }

interface F {
  (str: string): string
}

let incrementString: F = str => str.replace(/([0-8]|\d?9+)?$/, (e) => `${e ? + e + 1 : 1}`)

test("should return incremented string", () => {
  expect(incrementString("foobar000")).toBe("foobar001");
  expect(incrementString("foobar999")).toBe("foobar1000");
  expect(incrementString("foobar00999")).toBe("foobar01000");
  expect(incrementString("foo")).toBe("foo1");
  expect(incrementString("foobar001")).toBe("foobar002");
  expect(incrementString("foobar1")).toBe("foobar2");
  expect(incrementString("1")).toBe("2");
  expect(incrementString("009")).toBe("010");
  expect(incrementString("fo99obar99")).toBe("fo99obar100");
})