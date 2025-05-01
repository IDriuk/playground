/* 
  375. Guess Number Higher or Lower II
  We are playing the Guess Game. The game is as follows:
  I pick a number from 1 to n. You have to guess which number I picked.
  Every time you guess wrong, I'll tell you whether the number is higher or lower.

  However, when you guess a particular number x, and you guess wrong, you pay $x.
  You win the game when you guess the number I picked.

  Given a particular n >= 1, find out how much money you need to have to guarantee a win.
*/

export function getMoneyAmount(n: number) {
  return calculate(1, n);
}

function calculate(low: number, high: number): number {
  if (low >= high) {
    return 0;
  }
  let minres = Infinity;
  for (let i = low; i <= high; i++) {
    let res = i + Math.max(calculate(i + 1, high), calculate(low, i - 1));
    minres = Math.min(res, minres);
  }
  return minres;
}
