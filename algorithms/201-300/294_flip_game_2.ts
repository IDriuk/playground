/*
  294. Flip Game II
  You are playing the following Flip Game with your friend:
  Given a string that contains only these two characters: "+" and "-",
  you and your friend take turns to flip two consecutive "++" into "--".
  The game ends when a person can no longer make a move and therefore the other person will be the winner.

  Write a function to determine if the starting player can guarantee a win.
*/

let canWin = (s: string, map: { [key: string]: boolean }) => {
  if (map[s] != undefined) {
    return map[s];
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) == "+" && s.charAt(i + 1) == "+") {
      let opponent = s.substring(0, i) + "--" + s.substring(i + 2);
      if (!canWin(opponent, map)) {
        map[s] = true;
        return true;
      }
    }
  }
  map[s] = false;
  return false;
};

export function flipGame2(s: string) {
  if (s == null || s.length < 2) {
    return false;
  }
  let map: { [key: string]: boolean } = {};
  return canWin(s, map);
}
