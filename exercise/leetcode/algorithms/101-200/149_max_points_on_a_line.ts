/*
  149. Max Points on a Line
  Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
*/

export function maxPoints(points: number[][]): number {
  if (points.length < 3) {
    return points.length;
  }

  let res = 1;
  let map: Map<string, number> = new Map();
  for (let i = 0; i < points.length; i++) {
    let max = 0;
    let countSame = 0;
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
        countSame++;
      } else {
        let key = normalize(points[i], points[j]);
        if (map.has(key)) {
          let count = map.get(key)! + 1;
          map.set(key, count);
          if (count > max) {
            max = count;
          }
        } else {
          map.set(key, 1);
          if (max == 0) {
            max++;
          }
        }
      }
    }
    res = Math.max(res, max + countSame + 1);
    map.clear();
  }

  return res;
}

function normalize(p1: number[], p2: number[]): string {
  let a, b, c;
  if (p1[0] == p2[0]) {
    b = 0;
    a = 1;
    c = p1[0];
  } else if (p1[1] == p2[1]) {
    a = 0;
    b = 1;
    c = p2[1];
  } else {
    let dx = p1[0] - p2[0];
    let dy = p1[1] - p2[1];
    let cd = gcd(Math.abs(dx), Math.abs(dy));
    a = ~~(dy / cd);
    b = ~~(dx / cd);
    if (a * b < 0) {
      a = -1 * Math.abs(a);
      b = Math.abs(b);
    } else {
      a = Math.abs(a);
      b = Math.abs(b);
    }
    c = a * p1[0] + b * p1[1];
  }
  return `${a}|${b}|${c}`;
}

function gcd(a: number, b: number): number {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
