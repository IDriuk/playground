/*
  407. Trapping Rain Water 2
  Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map,
  compute the volume of water it is able to trap after raining.
  Note:
  Both m and n are less than 110.
  The height of each unit cell is greater than 0 and is less than 20000
*/
import FastPriorityQueue from "../201-300/218_the_skyline_problem";

class Cell {
  constructor(
    public row: number,
    public col: number,
    public minBorderHeight: number,
  ) {}
}

export function trapRainWater2(heightMap: number[][]) {
  if (heightMap == null || heightMap.length < 3 || heightMap[0].length < 3) {
    return 0;
  }
  let rows = heightMap.length;
  let cols = heightMap[0].length;
  let visited = new Array(rows).fill(null).map((_) => Array(cols).fill(false));
  let queue = new FastPriorityQueue<Cell>(
    (a, b) => a.minBorderHeight < b.minBorderHeight,
  );

  for (let i = 0; i < rows; i++) {
    if (i == 0 || i == rows - 1) {
      for (let j = 0; j < cols; j++) {
        visited[i][j] = true;
        queue.add(new Cell(i, j, heightMap[i][j]));
      }
    } else {
      visited[i][0] = true;
      visited[i][cols - 1] = true;
      queue.add(new Cell(i, 0, heightMap[i][0]));
      queue.add(new Cell(i, cols - 1, heightMap[i][cols - 1]));
    }
  }

  let directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let volume = 0;
  while (!queue.isEmpty()) {
    let cell = queue.poll();
    for (let dir of directions) {
      let row = cell?.row! + dir[0];
      let col = cell?.col! + dir[1];
      if (
        row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < cols &&
        !visited[row][col]
      ) {
        visited[row][col] = true;
        if (cell?.minBorderHeight! > heightMap[row][col]) {
          volume += cell?.minBorderHeight! - heightMap[row][col];
        }
        queue.add(
          new Cell(
            row,
            col,
            Math.max(heightMap[row][col], cell?.minBorderHeight!),
          ),
        );
      }
    }
  }

  return volume;
}
