/*
  261. Graph Valid Tree
  Given n nodes labeled from 0 to n - 1 and a list on undirected edges (each edge is a pair of nodes),
  write a function to check whether these edges make up a valid tree.
  
  Note:
  You can assume that no duplicate edges will appear in edges.
  Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/

export function graphValidTree(n: number, edges: number[][]) {
  if (edges.length != n - 1) {
    return false;
  }

  let ids = new Array(n).fill(0).map((_, i) => i);
  for (let edge of edges) {
    let r1 = find(ids, edge[0]);
    let r2 = find(ids, edge[1]);
    if (r1 == r2) {
      return false;
    }
    ids[r1] = r2;
  }
  return true;
}

function find(ids: number[], i: number) {
  while (i != ids[i]) {
    ids[i] = ids[ids[i]];
    i = ids[i];
  }
  return i;
}
