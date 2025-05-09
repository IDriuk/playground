// Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates 
// that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.
// https://leetcode.com/problems/course-schedule/
// connect: graph

/*
var canFinish = function(numCourses, prerequisites) {
    let prevs = Array(numCourses).fill(null).map( _ => [])
    
    for (let p of prerequisites) {
        prevs[p[1]].push(p[0]) 
    }
    
    let visited = Array(numCourses).fill(false)
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(prevs, visited, i)) {
            return false
        }
    }
    
    return true
    
    function dfs(graph, visited, course) {
        if (visited[course]) {
            return false
        }
        
        visited[course] = true
        for (let next of graph[course]) {
            if (!dfs(graph, visited, next)) {
                return false
            }
        }
        visited[course] = false
        
        return true
    }
};
*/

var canFinish = function(numCourses: number, prerequisites: number[][]) {
  let currents: Record<number, number[]> = {}
  let prevs: Record<number, number[]> = {}
  
  for (let p of prerequisites ) {
      let [current, prev] = p
      if (currents[current] && currents[current].length > 0) {
        currents[current].push(prev)
      } else {
        currents[current] = [prev]
      }
      if (prevs[prev] && prevs[prev].length > 0) {
        prevs[prev].push(current)
      } else {
        prevs[prev] = [current]
      }
  }
  
  let ends =Object.keys(prevs).map(Number).filter( i => !currents[i])

  while( ends.length ) {
    let end = ends.shift()!
    let curs = prevs[end]
    delete prevs[end]
    for (let i = 0; i < curs.length; i++) {
      let cur = curs[i]
      let cprevs = currents[cur]
      currents[cur] = cprevs.filter( v => v != end)
      if (currents[cur].length == 0) { 
        delete currents[cur]
        if (prevs[cur]) {
          ends.push(cur)
        }
      }
    }
  }

  let currentsEmpty = Object.keys(currents).length == 0
  let prevsEmpty = Object.keys(prevs).length == 0
  
  return  currentsEmpty && prevsEmpty
};

test("check course schedule", () => {
  expect(canFinish(2, [[1,0]])).toBe(true)
  expect(canFinish(2, [[1,0],[0,1]])).toBe(false)
})