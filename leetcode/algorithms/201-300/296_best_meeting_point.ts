/*
  296. Best Meeting Point
  A group of two or more people wants to meet and minimize the total travel distance.
  You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group.
  The distance is calculated using Manhattan Distance, where distance (p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|
*/

export function bestMeetingPoint(grid: number[][]) {
  let minDistance = Infinity;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let distance = search(grid, row, col);
      minDistance = Math.min(distance, minDistance);
    }
  }
  return minDistance;
}

function search(grid: number[][], row: number, col: number) {
  let m = grid.length;
  let n = grid[0].length;
  let visited = new Array(m).fill(null).map((_) => new Array(n).fill(false));

  let q: number[][] = [];
  q.push([row, col, 0]);

  let totalDistance = 0;

  while (q.length > 0) {
    let point = q.shift()!;
    let [r, c, d] = point;
    if (r < 0 || c < 0 || r >= m || c >= n || visited[r][c]) {
      continue;
    }
    if (grid[r][c] == 1) {
      totalDistance += d;
    }
    visited[r][c] = true;
    q.push([r + 1, c, d + 1]);
    q.push([r - 1, c, d + 1]);
    q.push([r, c + 1, d + 1]);
    q.push([r, c - 1, d + 1]);
  }

  return totalDistance;
}
