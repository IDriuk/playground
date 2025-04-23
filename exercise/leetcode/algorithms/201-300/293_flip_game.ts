/*
  293. Flip Game
  You are playing the following Flip Game with your friend:
  Given a string that contains only these two characters: + and '-',
  you and your friend take turns to flip two consecutive "++" into "--".
  The game ends when a person can no longer make a move and therefore the other person will be winner.

  Write a function to compute all possible states of the string after one valid move.
  Note:
  If there is no valid move, return an empty list [].
*/

export function flipGame(s: string) {
  let list: string[] = [];
  for (let i = -1; (i = s.indexOf("++", i + 1)) >= 0; ) {
    list.push(s.substring(0, i) + "--" + s.substring(i + 2));
  }
  return list;
}
