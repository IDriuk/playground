// Complementary DNA
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// connect: undefined

function DNAStrand(dna:string){
  const complement: Record<string,string> = { A: 'T', C: 'G', T: 'A', G: 'C' }
  
  return dna.split('').map( l => complement[l]).join('')
}

test("find complementary DNA", () => {
  expect(DNAStrand("ATTGC")).toBe("TAACG")
  expect(DNAStrand("GTAT")).toBe("CATA")
})