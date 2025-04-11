/*
  305. Number of Islands II
  A 2d grid map of m rows and n columns is initially filled with water.
  We may perform an addLand operation which turns the water at position (row, col) into a land.
  Given a list of positions to operate, count number of islands after each addLand operation.
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
  You may assume all four edges of the grid are all surrounded by water.
*/

export function numberOfIslands2(m: number, n: number, positions: number[][]) {
  let ans: number[] = [];
  let land2id = new Map<number, number>();
  let num_islands = 0;
  let island_id = 0;
  for (let pos of positions) {
    let [r, c] = pos;
    let overlap = new Set<number>();
    if (r - 1 >= 0 && land2id.has((r - 1) * n + c)) {
      overlap.add(land2id.get((r - 1) * n + c)!);
    }
    if (r + 1 >= 0 && land2id.has((r + 1) * n + c)) {
      overlap.add(land2id.get((r + 1) * n + c)!);
    }
    if (c - 1 >= 0 && land2id.has(r * n + c - 1)) {
      overlap.add(land2id.get(r * n + c - 1)!);
    }
    if (c + 1 >= 0 && land2id.has(r * n + c + 1)) {
      overlap.add(land2id.get(r * n + c + 1)!);
    }

    if (overlap.size == 0) {
      ++num_islands;
      land2id.set(r * n + c, island_id++);
    } else if (overlap.size == 1) {
      land2id.set(r * n + c, Array.from(overlap)[0]);
    } else {
      let root_id = Array.from(overlap)[0];
      for (let kv of Array.from(land2id.entries())) {
        if (overlap.has(kv[1])) {
          land2id.set(kv[0], root_id);
        }
      }
      land2id.set(r * n + c, root_id);
      num_islands -= overlap.size - 1;
    }

    ans.push(num_islands);
  }

  return ans;
}
