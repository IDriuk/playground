/*
  208. Implement Trie (Prefix Tree)
  Implement a trie with insert, search, and startsWith methods.

  Note:
  You may assume that all inputs are consist of lowercase letters a-z.
  All inputs are guaranteed to be non-empty strings.
*/

class TrieNode {
  links: TrieNode[];
  R = 26;
  end = false;
  constructor() {
    this.links = Array<TrieNode>(this.R);
  }

  setEnd = () => {
    this.end = true;
  };

  isEnd = (): boolean => {
    return this.end;
  };

  put = (ch: string, node: TrieNode) => {
    this.links[ch.charCodeAt(0) - "a".charCodeAt(0)] = node;
  };

  get = (ch: string) => {
    return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)];
  };

  containsKey = (ch: string) => {
    return this.links[ch.charCodeAt(0) - "a".charCodeAt(0)];
  };
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert = (word: string) => {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let currentChar = word.charAt(i);
      if (!node.containsKey(currentChar)) {
        node.put(currentChar, new TrieNode());
      }
      node = node.get(currentChar);
    }
    node.setEnd();
  };

  searchPrefix = (word: string) => {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let curLetter = word.charAt(i);
      if (node.containsKey(curLetter)) {
        node = node.get(curLetter);
      } else {
        return null;
      }
    }
    return node;
  };

  search = (word: string) => {
    let node = this.searchPrefix(word);
    return node != null && node.isEnd();
  };

  startsWith = (prefix: string) => {
    let node = this.searchPrefix(prefix);
    return node != null;
  };
}
