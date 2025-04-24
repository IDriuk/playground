// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// connect: set

// function longest(s1, s2) {
//   let set = {}
//   return (s1 + s2).split('').sort().reduce((ac, el) => {
//     if (!set[el]) {
//       set[el] = true
//       ac.push(el)
//     }
//     return ac
//   }, []).join('')
// }

/*
function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
} 
*/

const longest = (s1: string, s2: string) => [...new Set(s1+s2)].sort().join('')

test("sorted string with uniq characters", () => {
  expect(longest("aretheyhere", "yestheyarehere")).toBe("aehrsty")
  expect(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).toBe("abcdefghilnoprstu")
  expect(longest("inmanylanguages", "theresapairoffunctions")).toBe("acefghilmnoprstuy")
})