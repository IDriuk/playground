// Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, 
// where adjacent cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once in a word.
// https://leetcode.com/problems/word-search-ii/
// connect: trie

export class TrieNode {
  next: { [key: string]: TrieNode };
  word: string | null;

  constructor() {
    this.next = {};
    this.word = null;
  }
}

export function findWords(board: string[][], words: string[]): string[] {
  if (!board.length || !board[0].length) return [];

  const m = board.length;
  const n = board[0].length;
  const root = buildTrie(words);
  const res: string[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      track(i, j, root);
    }
  }

  return res;

  function track(i: number, j: number, prev: TrieNode): void {
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === '#') return;

    const c = board[i][j];
    const node = prev.next[c];
    if (!node) return;

    if (node.word) {
      res.push(node.word);
      node.word = null; 
    }

    board[i][j] = '#';
    track(i - 1, j, node);
    track(i + 1, j, node);
    track(i, j - 1, node);
    track(i, j + 1, node);
    board[i][j] = c;
  }

  function buildTrie(words: string[]): TrieNode {
    const root = new TrieNode();
    for (const word of words) {
      let node = root;
      for (const char of word) {
        if (!node.next[char]) {
          node.next[char] = new TrieNode();
        }
        node = node.next[char];
      }
      node.word = word;
    }
    return root;
  }
}

describe('findWords', () => {
  it('finds words present in the board', () => {
    const board = [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v']
    ];
    const words = ['oath', 'pea', 'eat', 'rain'];
    const result = findWords(board, words);
    expect(result.sort()).toEqual(['eat', 'oath'].sort());
  });

  it('returns empty array when no words are found', () => {
    const board = [
      ['a', 'b'],
      ['c', 'd']
    ];
    const words = ['xyz', 'uvw'];
    expect(findWords(board, words)).toEqual([]);
  });

  it('handles empty board', () => {
    expect(findWords([], ['word'])).toEqual([]);
  });

  it('handles empty word list', () => {
    const board = [
      ['a', 'b'],
      ['c', 'd']
    ];
    expect(findWords(board, [])).toEqual([]);
  });

  it('handles single character board and word match', () => {
    const board = [['a']];
    const words = ['a'];
    expect(findWords(board, words)).toEqual(['a']);
  });
});
