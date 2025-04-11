/*
  299. Bulls and Cows
  You are playing the following Bulls and Cows game with your friend: 
  You write down a number and ask your friend to guess what the number is.
  Each time your friend makes a guess, you provide a hint that indicates  how many digits in said guess match your secret number
  exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position
  (called "cows").
  You friend will use successive guesses and hints to eventually derive the secret number.

  Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls
  and B to indicate the cows.

  Please note that both secret number and friend's guess may contain duplicate digits.
*/

export function bullsAndCows(secret: string, guess: string) {
  let s = secret.split("");
  let g = guess.split("");
  let bulls = 0;
  let cows = 0;
  let count = new Array<number>(10).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] == g[i]) {
      bulls++;
    } else {
      if (count[s[i].charCodeAt(0) - "0".charCodeAt(0)]++ < 0) {
        cows++;
      }
      if (count[g[i].charCodeAt(0) - "0".charCodeAt(0)]-- > 0) {
        cows++;
      }
    }
  }

  return `${bulls}A${cows}B`;
}
