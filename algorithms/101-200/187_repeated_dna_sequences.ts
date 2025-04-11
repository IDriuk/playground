/*
  187. Repeated DNA Sequences.
  All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T,
  for example: "ACGAATTCCG".
  When  studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

  Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
*/

export function findRepeatedDnaSequences(s: string): string[] {
  if (s == null || s.length < 10) {
    return [];
  }

  let res: Set<string> = new Set();
  let set: Set<string> = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    let sub = s.substring(i, i + 10);
    if (set.has(sub)) {
      res.add(sub);
    }
    set.add(sub);
  }

  return Array.from(res);
}
