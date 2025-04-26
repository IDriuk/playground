// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.
// connect: interest


test('TreeNode is a constructor', () => {
  // expect(typeof TreeNode.prototype.constructor).toEqual('function');
});

// test('Node can insert correctly', () => {
//   const node = new TreeNode(10);
//   node.insert(5);
//   node.insert(15);
//   node.insert(17);

//   expect(node.left?.data).toEqual(5);
//   expect(node.right?.data).toEqual(15);
//   expect(node.right?.right?.data).toEqual(17);
// });

// test('Contains returns node with the same data', () => {
//   const node = new TreeNode(10);
//   node.insert(5);
//   node.insert(15);
//   node.insert(20);
//   node.insert(0);
//   node.insert(-5);
//   node.insert(3);

//   const three = node.left?.left?.right;
//   expect(node.contains(3)).toEqual(three);
// });

// test('Contains returns null if value not found', () => {
//   const node = new TreeNode(10);
//   node.insert(5);
//   node.insert(15);
//   node.insert(20);
//   node.insert(0);
//   node.insert(-5);
//   node.insert(3);

//   expect(node.contains(9999)).toEqual(null);
// });