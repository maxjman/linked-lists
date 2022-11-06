// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToHead(val) {  //O(1)
        let newHead = new SinglyLinkedNode(val);
        newHead.next = this.head;
        this.head = newHead;

    }
    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        let curr = this.head;
        let sum = 0;
        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        let sum = this.sumOfNodes();
        return sum / this.length;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        let curr = this.head;
        if (n >= this.length) return undefined;
        for (let i = 0; i <= n; i++) {
            if (i === n) return curr;
            curr = curr.next;
        }
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        let mid = Math.floor(this.length / 2);
        if (this.length % 2 === 0) mid--;
        return this.findNthNode(mid);
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        // O(n)
        let curr = this.head;
        let reversed = new SinglyLinkedList();
        if (!curr) return undefined;
        while (curr) {
            reversed.addToHead(curr.value);
            curr = curr.next;
        }
        return reversed;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        // O(n)

        let curr = this.head;
        let prev;
        let oldNext;
        while (curr) {
            if (curr === this.head) {
                prev = curr;
                curr = curr.next;
            }
            else {
                oldNext = curr.next;
                curr.next = prev;
                prev = curr;
                curr = oldNext;
            }
        }
        this.head.next = null;
        this.head = prev;

    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this.head;
    }

    addToHead(val) {
        let newHead = new DoublyLinkedNode(val);
        newHead.next = this.head;
        this.head = newHead;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        // O(n)

        let mid = Math.floor(this.length / 2);
        if (this.length % 2 === 0) mid--;
        let curr = this.head;
        for (let i = 0; i < mid; i++) {
            curr = curr.next;
        }
        return curr;
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        //O(n)
        let curr = this.head;
        let reversed = new DoublyLinkedList();
        if (!curr) return undefined;
        while (curr) {
            reversed.addToHead(curr.value);
            curr = curr.next;
        }
        return reversed;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        //O(n)

        let curr = this.head;
        if (!curr || !curr.next) return //for empty or 1 element, remains the same
        let last;
        let oldNext;
        while (curr) {
            if (curr === this.head) {
                last = curr;
                curr = curr.next;
            }
            else {
                oldNext = curr.next;
                curr.next = last;
                curr.prev.prev = curr;
                last = curr;
                curr = oldNext;
            }
        }
        this.head.next = null;
        this.head = last;
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
