// Number of trailing zeros of N!
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
// connect: factorial, interesting

// function zeros (n) {
//   let k = Math.floor( Math.log(n) / Math.log(5) )
//   let z = 0
  
//   for (let i = 1; i <= k; i++) {
//     z += Math.floor( n / Math.pow(5, i))
//   }

//   return z
// }

/* 
function zeros (n) {
  let zeros = 0
  for ( let i = 1; i <= n; i++ ) {
    let v = i;
    while ( !(v % 5) ) {
      zeros++
      v /= 5
    }
  }

  return zeros
}
*/


function zeros (n:number) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5); // 5's, 25's, 125's
    zs+=n
  }
  return zs;
} 

test("should return factorial trailing zeroes", () => {
  expect(zeros(100)).toBe(24)
})
