// Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
// connect: undefined

const MORSE_CODE: { [code: string]: string } = {
  // Letters
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",

  // Numbers
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",

  // Punctuation
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": "\"",
  "...-..-": "$",
  ".--.-.": "@",

  // Special (optional)
  "": " ", // allow for double/triple space -> word break
};


const decodeMorse = (morseCode: string) => {
  return  morseCode
    .replace(/([.-]+)\s?/g, (_, c) => MORSE_CODE[c] )
    .split(' ').filter( v => v != '').join(' ')
}

test('decode morse code', () => {
  expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
  expect(decodeMorse('   .... . -.--   ')).toBe('HEY')
})