/*
  310. Minimum Height Trees
  For a undirected graph with tree characteristics, we can choose any node as the root.
  The result graph is then a rooted tree.
  Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs).
  Given such a graph, write a function to find all the MHTs  and return a list of their root labels.

  Format 
  The graph contains n nodes which are labeled from 0 to n - 1.
  You will be given the number n and a list of undirected edges (each edge is a pair of labels).

  You can assume that no duplicate edges will appear in edges. 
  Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/

export function findMinHeightTrees(n: number, edges: number[][]) {
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }

  let adj: Set<number>[] = [];
  for (let i = 0; i < n; i++) {
    adj.push(new Set());
  }

  for (let edge of edges) {
    adj[edge[0]].add(edge[1]);
    adj[edge[1]].add(edge[0]);
  }

  let leaves: number[] = [];
  for (let i = 0; i < n; i++) {
    if (adj[i].size == 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    let numLeaf = leaves.length;
    n -= numLeaf;
    for (let i = 0; i < numLeaf; i++) {
      let curNode = leaves.shift()!;
      let j = adj[curNode].values().next().value;
      adj[j].delete(curNode);
      if (adj[j].size == 1) {
        leaves.push(j);
      }
    }
  }

  return leaves;
}
