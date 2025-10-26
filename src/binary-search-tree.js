const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null;
  }
  root() {
    // Remove line below and write your code here
    return this.node;
  }

  add(data) {
    // Remove line below and write your code here
    if (this.node === null) {
      this.node = new Node(data);
    } else {
      function searchTree(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        }
        if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(this.node);
    }
  }

  find(data) {
    // Remove line below and write your code here
    let current = this.node;
    while (current) {
      if (current.data === data) {
        return current;
      } else {
        if (data < current.data) {
          current = current.left;
        }
        if (data > current.data) {
          current = current.right;
        }
      }
    }
    return null;
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }
}

module.exports = {
  BinarySearchTree,
};
