// Double Cola
// https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript
// connect: undefined

function whoIsNext(names: string[], r: number){
  let map: Record<string, number> = names.reduce((ac, name) => ({ [name]: 1, ...ac }), {})
  let count = 0
  while ( true ) {
    let name = names.shift()
    if (!name) break;
    count += map[name]
    if ( r <= count ) { return name }
    names.push(name)
    map[name] *= 2
  }
}

test("double cola", () => {
  expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"],1)).toBe("Sheldon")
  expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"],10)).toBe("Penny")
})