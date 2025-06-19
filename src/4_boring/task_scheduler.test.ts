// Task Scheduler
// You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. 
// Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, 
// but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
// Return the minimum number of CPU intervals required to complete all tasks.
// https://leetcode.com/problems/task-scheduler/
// connect: undefined

var leastInterval = function(tasks: string[], n: number) {
  let taskMap: Record<string,Record<string, number>> = {}
  
  for (let task of tasks) {
      if (taskMap[task]) {
        taskMap[task].count++
      } else {
        taskMap[task] = { count: 1, position: -1 }
      }
  }

  let schedule = []

  let entries = Object.entries(taskMap)

  while (true) {
    let maxIndex = -1
    let maxCount = 0

    for (let i in entries) {
      let [char, { count, position }] = entries[i]
      let cur = schedule.length - 1
      if ((position < 0 || cur - position >= n) && count > maxCount) {
        maxIndex = +i
        maxCount = count
      } 
    }

    if ( maxIndex >= 0 ) {
      let task = entries.splice(maxIndex, 1)
      let [[ char, { count, position }]] = task

      schedule.push(char)

      if (count > 1) {
        entries.push([
          char, 
          { 
            count: count - 1, 
            position: schedule.length - 1
          }])
      }
    } else {
      if (!entries.length) {
        return schedule.length
      }
      schedule.push("idle")
    }
    
  }
};

test("task scheduler", () => {
  expect(leastInterval(["A","A","A","B","B","B"], 2)).toBe(8)
  expect(leastInterval(["A","C","A","B","D","B"], 1)).toBe(6)
  expect(leastInterval(["A","A","A", "B","B","B"], 3)).toBe(10)
})