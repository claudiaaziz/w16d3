// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder.length && !inorder.length) return null;

  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)

  const midIdx = inorder.indexOf(rootVal)

  const leftInorder = inorder.slice(0..midIdx)
  const rightInorder = inorder.slice(midIdx+1)
  const leftPreorder = preorder.filter((val) => leftInorder.includes(val))
  const rightPreorder = preorder.filter((val) => rightInorder.includes(val));

  const leftSubTree = buildTree(leftPreorder, leftInorder)
  const rightSubTree = buildTree(rightPreorder, rightInorder)

  root.left = leftSubTree
  root.right = rightSubTree

  return root
}
