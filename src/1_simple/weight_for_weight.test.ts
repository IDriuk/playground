// Weight for weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
// connect: undefined

// function orderWeight(string: string) {
//   return string.split(' ').sort( (a, b) => {
//     let av = a.split('').reduce( (ac, v) => parseInt(ac) + parseInt(v))
//     let bv = b.split('').reduce( (ac, v) => parseInt(ac) + parseInt(v))
//     if (av == bv) {
//       let length = Math.min(a.length, b.length)
//       for ( let i = 0; i < length; i++ ) {
//         if (a[i] - b[i] != 0) return a[i] - b[i]
//       }
//       return a.length - b.length
//     } else { 
//       return av - bv 
//     }
//   }).join(' ')
// }


function orderWeight(str: string) {
  const sum = (x: string) => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
} 

test("weight for weight", () => {
  expect(orderWeight("103 123 4444 99 2000")).toBe("2000 103 123 4444 99")
  expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toBe("11 11 2000 10003 22 123 1234000 44444444 9999")
})
