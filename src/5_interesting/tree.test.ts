// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
// connect: tree, interest


describe('Node', () => {
  test('Node is a constructor', () => {
    // expect(typeof TreeNode1.prototype.constructor).toEqual('function');
  });

  // test('Node has a data and children properties', () => {
  //   const n = new TreeNode1('a');
  //   expect(n.data).toEqual('a');
  //   expect(n.children.length).toEqual(0);
  // });

  // test('Node can add children', () => {
  //   const n = new TreeNode1('a');
  //   n.add('b');
  //   expect(n.children.length).toEqual(1);
  //   expect(n.children[0].children).toEqual([]);
  // });

  // test('Node can remove children', () => {
  //   const n = new TreeNode1('a');
  //   n.add('b');
  //   expect(n.children.length).toEqual(1);
  //   n.remove('b');
  //   expect(n.children.length).toEqual(0);
  // });
});

// describe('Tree', () => {
//   test('starts empty', () => {
//     const t = new Tree();
//     expect(t.root).toEqual(null);
//   });

//   test('Can traverse bf', () => {
//     const letters: string[] = [];
//     const t = new Tree<string>();
//     t.root = new TreeNode1('a');
//     t.root.add('b');
//     t.root.add('c');
//     t.root.children[0].add('d');

//     t.traverseBF(node => {
//       letters.push(node.data);
//     });

//     expect(letters).toEqual(['a', 'b', 'c', 'd']);
//   });

//   test('Can traverse DF', () => {
//     const letters: string[] = [];
//     const t = new Tree<string>();
//     t.root = new TreeNode1('a');
//     t.root.add('b');
//     t.root.add('d');
//     t.root.children[0].add('c');

//     t.traverseDF(node => {
//       letters.push(node.data);
//     });

//     expect(letters).toEqual(['a', 'b', 'c', 'd']);
//   });
// });
