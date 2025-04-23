/*
  212. Word Search II
  Given a 2D board and a list of words from the dictionary, find all words in the board.
  Each word must be constructed from letters of sequentially adjacent cell,
  where "adjacent" cells are those horizontally or vertically neighboring.
  The same letter cell may not be used more than once in a word.
*/

class TrieNode {
  next: TrieNode[] = new Array<TrieNode>(26);
  word?: string;
}

function buildTrie(words: string[]) {
  let root = new TrieNode();
  for (let w of words) {
    let node = root;
    for (let c of w.split("")) {
      let i = c.charCodeAt(0) - "a".charCodeAt(0);
      if (node.next[i] == null) {
        node.next[i] = new TrieNode();
      }
      node = node.next[i];
    }
    node.word = w;
  }
  return root;
}

function dfs(
  board: string[][],
  i: number,
  j: number,
  node: TrieNode,
  res: string[],
) {
  let c = board[i][j];
  let index = c.charCodeAt(0) - "a".charCodeAt(0);
  if (c == "#" || node.next[index] == null) {
    return;
  }

  node = node.next[index];
  if (node.word != null) {
    res.push(node.word);
    node.word = undefined;
  }

  board[i][j] = "#";
  if (i > 0) {
    dfs(board, i - 1, j, node, res);
  }
  if (j > 0) {
    dfs(board, i, j - 1, node, res);
  }
  if (i < board.length - 1) {
    dfs(board, i + 1, j, node, res);
  }
  if (j < board[i].length - 1) {
    dfs(board, i, j + 1, node, res);
  }
  board[i][j] = c;
}

export function wordSearch2(board: string[][], words: string[]) {
  let res: string[] = [];
  let root = buildTrie(words);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(board, i, j, root, res);
    }
  }
  return res;
}
