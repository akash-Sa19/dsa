// ?  Given head, the head of a linked list, determine if the linked list has a cycle in it.

// ? There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Approach
// The approach used in the given code is known as Floyd's Tortoise and Hare algorithm, which is a cycle detection algorithm for linked lists. Here's a step-by-step explanation of the approach:

// 1- Initialization:
// Initialize two pointers, slow and fast, both pointing to the head of the linked list.

// The slow pointer moves one step at a time, and the fast pointer moves two steps at a time.

// 2-Traversal:
// Move both pointers through the linked list until either the fast pointer reaches the end of the list (indicating no cycle) or the slow and fast pointers meet (indicating the presence of a cycle).

// 3-Cycle Detection:
// During the traversal, if there is a cycle, the fast pointer will eventually enter the cycle and start orbiting around it. The slow pointer will also enter the cycle, and since the fast pointer is moving faster, they will meet at some point within the cycle.

// 4- Return Result:
// If the pointers meet (slow == fast), it means there is a cycle, and the function returns true.

// If the fast pointer reaches the end of the list (fast == NULL or fast->next == NULL), it means there is no cycle, and the function returns false.

// Complexity
// Time complexity:0(n)
// Space complexity:0(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
