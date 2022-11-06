// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //O(1)
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            // console.log(this.head);
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here
        // O(1)
        node = new DoublyLinkedNode(val);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        //O(1)
        if (!this.head) return undefined
        let oldHead = this.head;
        if (!this.head.next) this.head = null
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return oldHead.value;
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        //O(1)
        let oldTail = this.tail;
        if (!this.tail) return undefined;
        if (!this.tail.prev) {
            this.tail = null;
            this.head = null;
            this.length--;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
        return oldTail.value;
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        //O(1)
        if (!this.head) return undefined;
        else return this.head.value;
    }

    peekAtTail() {
        // Return value of tail node

        // Write your hypothesis on the time complexity of this method here
        // O(1)
        if (!this.tail) return undefined;
        else return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
