/*
  210. Course Schedule II
  There are a total of n courses you have to take, labeled from 0 to n - 1.

  Some courses may have prerequisites, 
  for example to take course 0 you have to first take course 1, 
  which is expressed as a pair: [0, 1]

  Given the total number of courses and a list of prerequisite pairs,
  return the ordering of courses you should take to finish all courses.

  There may be multiple correct orders, you just need to return one of them.
  If it is impossible to finish all courses, return an empty array.
*/

export function courseSchedule2(numCourses: number, prerequisites: number[][]) {
  let inDegrees = Array(numCourses).fill(0);
  let graph: Map<number, Set<number>> = new Map();
  for (let courses of prerequisites) {
    if (!graph.has(courses[1])) {
      graph.set(courses[1], new Set());
    }
    graph.get(courses[1])?.add(courses[0]);
    inDegrees[courses[0]]++;
  }

  let queue: number[] = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] == 0) {
      queue.push(i);
    }
  }

  let order: number[] = new Array(numCourses);
  let i = 0;
  while (queue.length > 0) {
    let course = queue.shift();
    order[i] = course!;
    i++;

    if (graph.has(course!)) {
      for (let neighbor of Array.from(graph.get(course!)!)) {
        inDegrees[neighbor]--;
        if (inDegrees[neighbor] == 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  return i == numCourses ? order : [];
}
