// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// connect: undefined

function accum(s:string) {
	const result = []
  
  for (let i = 0; i < s.length; i++) {
    let j = i
    let upper = s[i].toUpperCase()
    let lower = ''
    while (j--) {
      lower = `${lower}${upper.toLowerCase()}`
    }
    result.push(`${upper}${lower}`)
  }
  
  return result.join('-')
}

test("should mumble", () => {
  expect(accum("abcd")).toBe("A-Bb-Ccc-Dddd")
  expect(accum("RqaEzty")).toBe("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
  expect(accum("cwAt")).toBe("C-Ww-Aaa-Tttt")
})