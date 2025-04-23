/*
  269. Alien Dictionary
  There is a new alien language which uses the latin alphabet.
  However, the order among letters are unknown to you.
  You receive a list of non-empty words from the dictionary,
  where words are sorted lexicographically by the rules of this new language.
  Derive the order of letters in this language.
*/

export function alienOrder(words: string[]) {
  if (words == null || words.length == 0) {
    return "";
  }

  let inDegrees = new Map<string, number>();
  for (let s of words) {
    for (let c of s.split("")) {
      inDegrees.set(c, 0);
    }
  }

  let graph = new Map<string, Set<string>>();

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    if (w1.startsWith(w2) && w1.length > w2.length) {
      return "";
    }
    for (let j = 0; j < w1.length && j < w2.length; j++) {
      let c1 = w1.charAt(j);
      let c2 = w2.charAt(j);
      if (c1 != c2) {
        if (!graph.has(c1)) {
          graph.set(c1, new Set());
        }
        graph.get(c1)?.add(c2);
        inDegrees.set(c2, inDegrees.get(c2)! + 1);
        break;
      }
    }
  }

  let q: string[] = [];
  for (let [k, v] of Array.from(inDegrees.entries())) {
    if (v == 0) {
      q.push(k);
    }
  }

  let order: string[] = [];

  while (q.length > 0) {
    let n = q.shift()!;
    order.push(n);
    if (graph.has(n)) {
      for (let neighbor of Array.from(graph.get(n)!)) {
        inDegrees.set(neighbor, inDegrees.get(neighbor)! - 1);
        if (inDegrees.get(neighbor) == 0) {
          q.push(neighbor);
        }
      }
    }
  }

  return order.length == inDegrees.size ? order.join("") : "";
}
