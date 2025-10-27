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
        } else {
          current = current.right;
        }
      }
    }
    return null;
  }

  has(data) {
    // Remove line below and write your code here
    let current = this.node;
    while (current) {
      if (current.data === data) {
        return true;
      } else {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
    return false;
  }

  remove(data) {
    // Remove line below and write your code here
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.node = removeNode(this.node, data);
  }

  min() {
    // Remove line below and write your code here
    let current = this.node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    // Remove line below and write your code here
    let current = this.node;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
