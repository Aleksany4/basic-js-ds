const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
//  * class ListNode {
//  *   constructor(x) {
//  *     this.value = x;
//  *     this.next = null;
//  *   }
//  * }
//  */
  class Node {
    constructor(data) {
      this.value = data;
      this.next = null;
    }
  }
  
  function removeKFromList(l, k) {
    let current = l
    let newList = new Node()
  
    while (current) {
      if (current.value === k) {
        while (current.value === k) {
          current = current.next
        }
      } else {
        if (!newList.value) {
          newList = new Node(current.value)
        } else {
          let currentList = newList
  
          while (currentList.next) {
            currentList = currentList.next
          }
  
          currentList = new Node(current.value)
        }
        current = current.next
      }
    }
    console.log(JSON.stringify(newList))
    return newList
  }

module.exports = {
  removeKFromList
};
