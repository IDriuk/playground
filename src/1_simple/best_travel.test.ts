// Best travel
// John and Mary want to travel between a few towns A, B, C ... 
// Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. 
// John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
// connect: recursion, reduce, combinations

function chooseBestSum(t:number, k:number, ls:number []) {
  var biggestCount = 0;

  var recurseTowns = function(townsSoFar: number[], lastIndex: number) {
    if (townsSoFar.length === k) {
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }      
      return; 
    }
    
    for (var i = lastIndex + 1; i < ls.length; i++) {
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns([], -1);
  
  return biggestCount || null;
}

test('should return the biggest distance to visit 3 towns', () => {
  expect(chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toBe(163)
  expect(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])).toBe(228)
})