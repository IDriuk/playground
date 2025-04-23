/*
  323. Number of Connected Components in an Undirected Graph
  Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
  write a function to find the number of connected components in an undirected graph.
*/

let id: number[];

export function countComponents(n: number, edges: number[][]) {
  let set = new Set<number>();
  id = new Array(n).fill(null).map((_, i) => i);
  for (let edge of edges) {
    union(edge[0], edge[1]);
  }

  for (let i = 0; i < n; i++) {
    set.add(root(i));
  }

  return set.size;
}

function root(i: number) {
  while (i != id[i]) {
    i = id[i];
  }
  return i;
}

function union(p: number, q: number) {
  let i = root(p);
  let j = root(q);
  id[i] = j;
}
