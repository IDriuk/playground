// Dubstep
// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
// connect: undefined

function songDecoder(song:string){
  return song.replace(/(WUB)+/g, ' ').trim()
}

test("dubstep", () => {
  expect(songDecoder("AWUBBWUBC")).toBe("A B C")
  expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toBe("A B C")
  expect(songDecoder("WUBAWUBBWUBCWUB")).toBe("A B C")
})