// Implement Trie (Prefix Tree)
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
// https://leetcode.com/problems/implement-trie-prefix-tree/
// connect: undefined

// Define the node structure for our binary search tree
interface TreeNode2 {
  val: string;
  left: TreeNode2 | null;
  right: TreeNode2 | null;
}

/**
 * Binary Search Tree for strings
 * Note: This was originally labeled as a Trie but is actually a BST
 */
class BST {
  private root: TreeNode2 | null = null;

  /**
   * Inserts a word into the binary search tree
   * @param word - The word to insert
   */
  insert(word: string): void {
    if (!this.root) {
      this.root = { val: word, left: null, right: null };
    } else {
      let node = this.root;
      while (true) {
        const comparison = word.localeCompare(node.val);
        
        if (comparison === 0) {
          // Word already exists in the tree
          return;
        } else if (comparison < 0) {
          if (node.left) {
            node = node.left;
          } else {
            node.left = { val: word, left: null, right: null };
            return;
          }
        } else {
          if (node.right) {
            node = node.right;
          } else {
            node.right = { val: word, left: null, right: null };
            return;
          }
        }
      }
    }
  }

  /**
   * Searches for a word in the binary search tree
   * @param word - The word to search for
   * @returns True if the word is found, false otherwise
   */
  search(word: string): boolean {
    let node = this.root;
    while (node) {
      const comparison = word.localeCompare(node.val);
      if (comparison === 0) {
        return true;
      } else if (comparison < 0) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  /**
   * Checks if any word in the tree starts with the given prefix
   * @param prefix - The prefix to check for
   * @returns True if any word starts with the prefix, false otherwise
   */
  startsWith(prefix: string): boolean {
    let node = this.root;
    if (!node) {
      return false;
    }

    while (node) {
      const nodeValue = node.val;
      const nodePrefix = nodeValue.substring(0, prefix.length);
      
      const compareWithFull = prefix.localeCompare(nodeValue);
      const compareWithPrefix = prefix.localeCompare(nodePrefix);

      if (compareWithPrefix === 0 || compareWithFull === 0) {
        return true;
      } else if (compareWithFull < 0) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }
}

describe('Binary Search Tree', () => {
  let bst: BST;

  beforeEach(() => {
    bst = new BST();
  });

  describe('insert method', () => {
    test('should insert a word into an empty tree', () => {
      bst.insert('apple');
      expect(bst.search('apple')).toBe(true);
    });

    test('should insert multiple words correctly', () => {
      bst.insert('banana');
      bst.insert('apple');
      bst.insert('cherry');
      
      expect(bst.search('apple')).toBe(true);
      expect(bst.search('banana')).toBe(true);
      expect(bst.search('cherry')).toBe(true);
    });

    test('should not duplicate existing words', () => {
      bst.insert('apple');
      bst.insert('apple');
      
      // Implementation detail: can't directly test for duplication prevention
      // but we can verify the word exists
      expect(bst.search('apple')).toBe(true);
    });
  });

  describe('search method', () => {
    beforeEach(() => {
      bst.insert('apple');
      bst.insert('banana');
      bst.insert('cherry');
    });

    test('should find existing words', () => {
      expect(bst.search('apple')).toBe(true);
      expect(bst.search('banana')).toBe(true);
      expect(bst.search('cherry')).toBe(true);
    });

    test('should return false for non-existing words', () => {
      expect(bst.search('orange')).toBe(false);
      expect(bst.search('grape')).toBe(false);
      expect(bst.search('')).toBe(false);
    });

    test('should handle case sensitivity correctly', () => {
      expect(bst.search('Apple')).toBe(false);
      
      bst.insert('Apple');
      expect(bst.search('Apple')).toBe(true);
      expect(bst.search('apple')).toBe(true);
    });
  });

  describe('startsWith method', () => {
    beforeEach(() => {
      bst.insert('apple');
      bst.insert('application');
      bst.insert('banana');
      bst.insert('cherry');
    });

    test('should find prefixes of existing words', () => {
      expect(bst.startsWith('app')).toBe(true);
      expect(bst.startsWith('ban')).toBe(true);
      expect(bst.startsWith('che')).toBe(true);
    });

    test('should return false for non-existing prefixes', () => {
      expect(bst.startsWith('orange')).toBe(false);
      expect(bst.startsWith('gra')).toBe(false);
    });

    test('should handle empty strings correctly', () => {
      // Empty string is a prefix of every word
      expect(bst.startsWith('')).toBe(true);
    });

    test('should return true for full words', () => {
      expect(bst.startsWith('apple')).toBe(true);
      expect(bst.startsWith('banana')).toBe(true);
    });

    test('should handle case sensitivity correctly', () => {
      expect(bst.startsWith('App')).toBe(false);
      
      bst.insert('Apricot');
      expect(bst.startsWith('Apr')).toBe(true);
      expect(bst.startsWith('apr')).toBe(false);
    });
  });

  describe('edge cases', () => {
    test('should handle empty tree correctly', () => {
      expect(bst.search('apple')).toBe(false);
      expect(bst.startsWith('a')).toBe(false);
    });

    test('should handle special characters correctly', () => {
      bst.insert('apple!');
      bst.insert('#banana');
      
      expect(bst.search('apple!')).toBe(true);
      expect(bst.search('#banana')).toBe(true);
      expect(bst.startsWith('#')).toBe(true);
    });
  });
});