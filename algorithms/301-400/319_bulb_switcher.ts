/*
  319. Bulb Switcher
  There are n bulbs that are initially off.
  You first turn on all bulbs.
  Then, you turn off every second bulb.
  Onthe third round, you toggle every third bulb (turning on if it's off or turning off if it's on).
  For the i-th round, you toggle every i bulb.
  For the n-th round, you only toggle the last bulb.
  Find how many bulbs are on after n rounds.
*/

export function bulbSwitcher(n: number) {
  return ~~Math.sqrt(n);
}
