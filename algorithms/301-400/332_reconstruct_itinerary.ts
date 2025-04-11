/*
  332. Reconstruct Itinerary
  Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], 
  reconstruct the itinerary in order.
  All of the tickets belong to a man who departs from JFK.
  Thus, the itinerary must begin with JFK.
*/

export function findItinerary(tickets: string[][]) {
  let g = new Map<string, string[] /* priority queue in java */>();
  for (let t of tickets) {
    let q = g.has(t[0]) ? g.get(t[0])! : [];
    q.push(t[1]);
    g.set(t[0], q);
  }
  let stack: string[] = [];
  let route: string[] = [];
  stack.push("JFK");
  while (stack.length) {
    while (g.has(stack.at(-1)!) && g.get(stack.at(-1)!)?.length) {
      stack.push(g.get(stack.at(-1)!)?.shift()!);
    }
    route.unshift(stack.pop()!);
  }
  return route;
}
