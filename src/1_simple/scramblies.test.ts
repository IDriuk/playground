// Scramblies
// Complete the function scramble(str1, str2) that returns true 
// if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
// connect: undefined

function scramble(str1:string, str2: string) {
  let s1 = str1.split('')
  let s2 = str2.split('')
  
  let map: Record<string, number> = {}
  
  for ( let el of s1) {
    map[el] = map[el] ? map[el] + 1 : 1  
  }
  
  for (let el of s2) {
    if ( !map[el] ) {
      return false
    } else {
      map[el]--
    }
  }
  
  return true
  
}

test("String1 should contain all the characters from string2", () => {
  expect(scramble('rkqodlw',           'world'      )).toBe(true );
  expect(scramble('cedewaraaossoqqyt', 'codewars'   )).toBe(true );
  expect(scramble('katas',             'steak'      )).toBe(false);
  expect(scramble('scriptjavx',        'javascript' )).toBe(false);
  expect(scramble('scriptingjava',     'javascript' )).toBe(true );
  expect(scramble('scriptsjava',       'javascripts')).toBe(true );
  expect(scramble('javscripts',        'javascript' )).toBe(false);
  expect(scramble('jscripts',          'javascript' )).toBe(false);
  expect(scramble('aabbcamaomsccdd',   'commas'     )).toBe(true );
  expect(scramble('commas',            'commas'     )).toBe(true );
  expect(scramble('sammoc',            'commas'     )).toBe(true )
})