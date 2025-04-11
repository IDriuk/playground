/*
  207. Course Schedule
  There are a total of n courses you have to take, labeled from 0 to n - 1.

  Some courses may have prerequisites, 
  for example to take course 0 you have to first take course 1, 
  which is expressed as a pair: [0, 1]

  Given the total number of courses and a list of prerequisite pairs,
  is it possible for you to finish all courses?

  Note:
  The input prerequisites is a graph represented by a list of edges, not adjacency matrices.
  Read more about how a graph is represented.
  You may assume that there are no duplicate edges in the input prerequisites.
*/

export function courseSchedule(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  if (numCourses <= 0) {
    return false;
  }

  let inDegrees = Array(numCourses).fill(0);
  for (let p of prerequisites) {
    inDegrees[p[0]]++;
  }

  let queue: number[] = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] == 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length > 0) {
    let c = queue.shift();
    count++;
    for (let p of prerequisites) {
      if (c == p[1]) {
        inDegrees[p[0]]--;
        if (inDegrees[p[0]] == 0) {
          queue.push(p[0]);
        }
      }
    }
  }

  return count == numCourses;
}
