/*
  403. Frog Jump
  A frog is crossing a river. 
  The river is divided into x units and at each unit there may or may not exist a stone.
  The frog can jump on a stone, but it must not jump into the water.

  Given a list of stones' positions (in units) in sorted ascending order,
  determine if the frog is able to cross the river by landing on the last stone.
  Initially , the frog is on the first stone and assume the first jump must be 1 unit.

  If the frog's last jump was k units,
  then its next jump must be either k - 1, k, or k + 1 units.
  Note that the frog can only jump in the forward direction.

  Note:
  The number of stones is >= 2 and < 100
  Each stone position will be a non-negative integer < 231.
  The first stone's position is always 0.
*/

export function frogJump(stones: number[]) {
  let map = new Map<number, Set<number>>();
  for (let i = 0; i < stones.length; i++) {
    map.set(stones[i], new Set());
  }
  map.get(0)?.add(0);
  for (let i = 0; i < stones.length; i++) {
    for (let k of Array.from(map.get(stones[i])!)) {
      for (let step = k - 1; step <= k + 1; step++) {
        if (step > 0 && map.has(stones[i] + step)) {
          map.get(stones[i] + step)?.add(step);
        }
      }
    }
  }

  return map.get(stones[stones.length - 1])!.size > 0;
}
