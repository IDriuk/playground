// Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
// The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. 
// Return the score for this array of answers, 
// giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, 
// represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(ar1: string[], ar2: string[]) {
  let result = ar2.reduce((ac, val, i) => {
    if ( val === ar1[i]) {
      ac = ac + 4
    } else if ( val === "" ) {
      ac = ac + 0
    } else {
      ac = ac - 1
    }
    return ac
  }, 0)
  
  return result >= 0 ? result : 0
}


test("Check the exam", () => {
  expect(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])).toBe(6)
  expect(checkExam(["a", "a", "c", "b"], ["a", "a", "b", "" ])).toBe(7)
  expect(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])).toBe(16)
  expect(checkExam(["b", "c", "b", "a"], ["" , "a", "a", "c"] )).toBe(0)
})