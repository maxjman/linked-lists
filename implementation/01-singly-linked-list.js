// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newHead = new SinglyLinkedNode(val);
        if (this.head === null) {
            //Do nothing
        }
        else {
            newHead.next = this.head;
        }
        this.head = newHead;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n)
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr) {
            if (curr.next === null) {
                curr.next = newNode;
                curr = null;
                this.length++;
                return this;
            }
            else curr = curr.next;
        }

    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        // O(1)
        let oldHead = this.head;
        if (this.head === null) return undefined
        else {
            this.head = this.head.next;
            this.length--;
        }
        return oldHead;
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        //O(n)
        let curr = this.head;
        if (curr === null) return undefined;

        if (curr.next === null) {
            this.head = null;
            this.length--;
        }
        else {
            while(curr) {
                if (curr.next.next === null) {
                    let oldTail = curr.next;
                    curr.next = null;
                    curr = null;
                    this.length--;
                    return oldTail;
                }
                else curr = curr.next;
            }
        }
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        // O(1)
        if (this.head === null) return undefined;
        else return this.head.value;
    }

    print() {
        // Print out the linked list

        // Write your hypothesis on the time complexity of this method here
        //O(n)
        let curr = this.head;
        if (!curr) return
        else {
            while (curr) {
                console.log(`${curr.value}`);
                curr = curr.next;
            }
            console.log('Null');
            // process.stdout.write('Null');
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
