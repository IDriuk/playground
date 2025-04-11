/*  
  391. Perfect Rectangle
  Given N axis-aligned rectangles where N > 0, 
  determine if they all together form an exact cover of a rectangular region.
  Each rectangle is represented as a bottom-left point and a top-right point.
  For example, a unit square is represented as [1, 1, 2, 2].
  (coordinate of bottom-left point is (1, 1) and top-right point is (2,2))
*/

export function isRectangleCover(rectangles: number[][]) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let count: Map<number, Map<number, number>> = new Map();

  for (let i = 0; i < rectangles.length; i++) {
    let rect = rectangles[i];
    minX = Math.min(minX, rect[0]);
    minY = Math.min(minY, rect[1]);
    maxX = Math.max(maxX, rect[2]);
    maxY = Math.max(maxY, rect[3]);
    updateCornerCount(count, rect[0], rect[1]);
    updateCornerCount(count, rect[0], rect[3]);
    updateCornerCount(count, rect[2], rect[1]);
    updateCornerCount(count, rect[2], rect[3]);
  }

  for (let map of Array.from(count.entries())) {
    let x = map[0];
    for (let entry of Array.from(map[1].entries())) {
      let y = entry[0];
      let val = entry[1];
      if (
        (x == minX && y == minY) ||
        (x == maxX && y == maxY) ||
        (x == minX && y == maxY) ||
        (x == maxX && y == minY)
      ) {
        if (val != 1) {
          return false;
        }
      } else {
        if (val != 2 && val != 4) {
          return false;
        }
      }
    }
  }

  return true;
}

function updateCornerCount(
  count: Map<number, Map<number, number>>,
  x: number,
  y: number,
) {
  if (!count.has(x)) {
    count.set(x, new Map());
  }
  if (!count.get(x)!.has(y)) {
    count.get(x)!.set(y, 1);
    return;
  }

  let yCount = count.get(x)!.get(y)!;
  count.get(x)!.set(y, yCount + 1);
}
