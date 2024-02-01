// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.


class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.head = null
        this.size = 0 
    }
    isEmpty() {
        return this.size === 0
    }
    prepend(val) {
        if (isEmpty()){
            const node = new Node(val)
        this.head = node
        this.size++
    }
}
}

const listJoin = (list1, list2) => {
 while (list1)
};

