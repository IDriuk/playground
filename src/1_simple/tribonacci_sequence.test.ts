// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
// connect: undefined

function tribonacci(signature: number[],n: number){
  if ( n == 0 ) return []
  if ( n <= 3 ) return signature.slice(0, n)
  
  let s = [...signature]
  
  for (let i = 3; i < n; i++) {
    s[i] = s[i - 1] + s[i - 2] + s[i - 3]
  }
  
  return s
}

test("should return tribonacci sequence", () => {
  expect(tribonacci( [1,1,1], 10)).toEqual([1,1,1,3,5,9,17,31,57,105]   )
  expect(tribonacci( [0,0,1], 10)).toEqual([0,0,1,1,2,4,7,13,24,44]     )
  expect(tribonacci( [0,1,1], 10)).toEqual([0,1,1,2,4,7,13,24,44,81]    )
  expect(tribonacci( [1,0,0], 10)).toEqual([1,0,0,1,1,2,4,7,13,24]      )
  expect(tribonacci( [0,0,0], 10)).toEqual([0,0,0,0,0,0,0,0,0,0]        )
  expect(tribonacci( [1,2,3], 10)).toEqual([1,2,3,6,11,20,37,68,125,230])
  expect(tribonacci( [3,2,1], 10)).toEqual([3,2,1,6,9,16,31,56,103,190] )
  expect(tribonacci( [1,1,1],  1)).toEqual([1])
  expect(tribonacci([300,200,100], 0)).toEqual([])
})