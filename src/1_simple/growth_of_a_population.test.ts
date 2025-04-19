// Growth of a Population
// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// connect: undefined

function nbYear(p0:number, percent:number, aug:number, p:number) {
  let perc = percent / 100 || 0
  let pcurrent = p0
  let result = 0
  
  while ( pcurrent < p) {
    pcurrent = Math.floor(pcurrent + pcurrent * perc + aug)
    result++
  }

  return result
}

test("How many years will it take for the town to grow a large population?", () => {
  expect(nbYear(1500, 5, 100, 5000)).toBe(15)
  expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10)
  expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94)
  expect(nbYear(1000, 2.0, 50, 1214)).toBe(4) // Did you maybe forget to round down population at the end of each year?
})