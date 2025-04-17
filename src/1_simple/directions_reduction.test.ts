// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
// connect: interesting

function dirReduc(arr: string[]){
  let pairs: Record<string, string> = {NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST'}
  
  dr(arr)
  
  function dr (arr: string[]) {
    for ( let i = 0; i < arr.length; i++) {
      if ( pairs[arr[i]] == arr[i + 1] ) {
        arr.splice(i, 2)
        dr(arr)
        break
      }
    }
  }
  
  return arr
}

/* 
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
*/

/*
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
} 
*/

test("reduce opposite directions", () => {
  expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"])
  expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual(["NORTH", "WEST", "SOUTH", "EAST"])
  expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toEqual([])
})