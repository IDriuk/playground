// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
// connect: tree

class LevelNode<T> {
  data: T;
  children: LevelNode<T>[] = [];

  constructor(data: T) {
    this.data = data;
  }

  add(data: T): void {
    this.children.push(new LevelNode<T>(data));
  }
}

function levelWidth<T>(root: LevelNode<T>): number[] {
  const arr: (LevelNode<T> | string)[] = [root, 's'];
  const counters: number[] = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else if (node instanceof LevelNode) {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}


test('levelWidth is a function', () => {
  expect(typeof levelWidth).toEqual('function');
});

test('levelWidth returns number of nodes at widest point', () => {
  const root = new LevelNode(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  expect(levelWidth(root)).toEqual([1, 3, 2]);
});

test('levelWidth returns number of nodes at widest point', () => {
  const root = new LevelNode(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

  expect(levelWidth(root)).toEqual([1, 1, 2, 1]);
});
