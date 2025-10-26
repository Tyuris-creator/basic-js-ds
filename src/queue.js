const { NotImplementedError } = require("../lib/errors");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }
  getUnderlyingList() {
    // Remove line below and write your code here
    if (!this.head) {
      return null;
    } else {
      const result = {
        value: this.head.value,
        next: null,
      };

      let current = this.head.next;
      let resultLink = result;
      while (current) {
        resultLink.next = {
          value: current.value,
          next: null,
        };
        resultLink = resultLink.next;
        current = current.next;
      }

      return result;
    }
  }

  enqueue(value) {
    // Remove line below and write your code here
    if (this.head === null) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    } else {
      const valueToReturn = this.head.value;
      this.head = this.head.next;
      return valueToReturn;
    }
  }
}

module.exports = {
  Queue,
};
