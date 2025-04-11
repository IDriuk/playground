/*
  134. Gas Station
  There are N gas stations along a circular route, where the amount of gas at station i is gas[i]
  
  You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1).
  You begin the journey with an empty tank at one of the gas stations.

  Return the starting gas station index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
  
  Note:
  If there exists a solution, it is guaranteed to be unique.
  Both input arrays are non-empty and have the same length.
  Each element in the input arrays is a non-negative integer.
*/

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let restGas = 0;
  let previous = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    restGas += gas[i] - cost[i];
    if (restGas < 0) {
      previous += restGas;
      restGas = 0;
      start = i + 1;
    }
  }

  return previous + restGas >= 0 ? start : -1;
}
