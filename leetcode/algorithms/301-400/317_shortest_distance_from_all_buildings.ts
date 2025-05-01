/*
  317. Shortest Distance from all buildings
  You want to build a house on an empty land which reaches all buildings in the shortest amount of distance.
  You can only move up, down, left and right. 
  You are given a 2D grid of values 0, 1 or 2, where:
  Each 0 marks an empty land which you can pass by freely.
  Each 1 marks a building which you cannot pass through
  Each 2 marks an obstacle which you cannot pass through.
*/

export function shortestDistance4(grid: number[][]) {
  if (grid == null || grid[0].length == 0) {
    return 0;
  }
  let shift = [0, 1, 0, -1, 0];
  let row = grid.length;
  let col = grid[0].length;
  let distance = Array(row)
    .fill(null)
    .map((_) => Array(col).fill(0));
  let reach = Array(row)
    .fill(null)
    .map((_) => Array(col).fill(0));
  let buildingNum = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        buildingNum++;
        let q: number[][] = [];
        q.push([i, j]);
        let isVisited = Array(row)
          .fill(null)
          .map((_) => Array(col).fill(false));
        let level = 1;

        while (q.length) {
          let qSize = q.length;
          for (let l = 0; l < qSize; l++) {
            let curr = q.shift()!;

            for (let k = 0; k < 4; k++) {
              let nextRow = curr[0] + shift[k];
              let nextCol = curr[1] + shift[k + 1];

              if (
                nextRow >= 0 &&
                nextRow < row &&
                nextCol >= 0 &&
                nextCol < col &&
                grid[nextRow][nextCol] == 0 &&
                !isVisited[nextRow][nextCol]
              ) {
                distance[nextRow][nextCol] += level;
                reach[nextRow][nextCol]++;
                isVisited[nextRow][nextCol] = true;
                q.push([nextRow, nextCol]);
              }
            }
          }
          level++;
        }
      }
    }
  }

  let shortest = Infinity;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 0 && reach[i][j] == buildingNum) {
        shortest = Math.min(shortest, distance[i][j]);
      }
    }
  }

  return shortest == Infinity ? -1 : shortest;
}
