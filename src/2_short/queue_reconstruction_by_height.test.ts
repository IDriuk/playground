// Queue Reconstruction by Height
// https://leetcode.com/problems/queue-reconstruction-by-height/
// connect: reduce


var reconstructQueue = function(people: number[][]) {
  let ar = people.sort( (a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])
  
  return ar.reduce( (ac: number[][], v) => [ ...ac.slice(0, v[1]), v,  ...ac.slice(v[1]) ], [])
};


test("queue reconstruction by height", () => {
  expect(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])).toEqual([[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]])
  expect(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]])).toEqual([[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]])
})