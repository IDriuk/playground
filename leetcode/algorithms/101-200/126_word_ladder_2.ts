/*
  126. Word Ladder II
  Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
  Only one letter can be changed at a time
  Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

  Note:
    Return an empty list if there is no such transformation sequence.
    All words have the same length.
    All words contain only lowercase alphabetic characters.
    You may assume no duplicates in the word list.
    You may assume beginWord and endWord are non-empty and are not the same.
*/

export function wordLadder2(
  beginWord: string,
  endWord: string,
  wordList: string[],
): string[][] {
  let dict = new Set<string>(wordList);
  let graph = new Map<string, string[]>();
  let distances = new Map<string, number>();

  bfs(beginWord, endWord, dict, graph, distances);
  let paths: string[][] = [];
  dfs(beginWord, endWord, graph, distances, new Array<string>(), paths);
  return paths;
}

function bfs(
  beginWord: string,
  endWord: string,
  dict: Set<string>,
  graph: Map<string, string[]>,
  distances: Map<string, number>,
) {
  let queue: string[] = [];
  queue.push(beginWord);
  distances.set(beginWord, 0);

  while (queue.length > 0) {
    let cur: string = queue.shift()!;
    if (cur && !graph.has(cur)) {
      graph.set(cur, []);
    }
    let curDistance = distances.get(cur)!;
    let neighbors: string[] = getNeighbors(cur, dict);
    for (let n of neighbors) {
      graph.get(cur)?.push(n);
      if (!distances.has(n)) {
        distances.set(n, curDistance + 1);
        queue.push(n);
      }
    }
  }
}

function getNeighbors(cur: string, dict: Set<string>): string[] {
  let neighbors: string[] = [];
  for (let i = 0; i < cur.length; i++) {
    for (let j = 97; j <= 122; j++) {
      let c = String.fromCharCode(j);
      let chars = cur.split("");
      if (chars[i] == c) {
        continue;
      }
      chars[i] = c;
      let next = chars.join("");
      if (dict.has(next)) {
        neighbors.push(next);
      }
    }
  }
  return neighbors;
}

function dfs(
  beginWord: string,
  endWord: string,
  graph: Map<string, string[]>,
  distance: Map<string, number>,
  p: string[],
  paths: string[][],
) {
  if (beginWord == endWord) {
    let path = Array.from(p);
    path.push(beginWord);
    paths.push(path);
    return;
  }

  let d = distance.get(beginWord)!;
  p.push(beginWord);
  for (let next of graph.get(beginWord)!) {
    if (distance.get(next) == d + 1) {
      dfs(next, endWord, graph, distance, p, paths);
    }
  }
  p.pop();
}
