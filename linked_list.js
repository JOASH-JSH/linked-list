class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this._size === 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            this._tail = newNode;
        }

        return ++this._size;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this._size === 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.next = this._head;
            this._head = newNode;
        }

        return ++this._size;
    }

    size() {
        return this._size;
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {
        if (index < 0 || index >= this._size) {
            return null;
        }

        if (index === 0) {
            return this._head;
        }

        if (index === this._size - 1) {
            return this._tail;
        }

        let node = this._head;

        while (index > 0) {
            node = node.next;
            index--;
        }

        return node;
    }

    pop() {
        const removedNode = this._tail;

        if (this._size === 1) {
            this._head = null;
            this._tail = null;
            this._size--;
        } else if (this._size > 1) {
            let node = this._head;

            while (node.next !== this._tail) {
                node = node.next;
            }

            node.next = null;
            this._tail = node;

            this._size--;
        }

        return removedNode;
    }

    contains(value) {
        let node = this._head;

        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }

        return false;
    }

    find(value) {
        let node = this._head;

        for (let i = 0; i < this._size; i++) {
            if (node.value === value) {
                return i;
            }

            node = node.next;
        }

        return null;
    }

    insertAt(value, index) {
        if (index > this._size) {
            return null;
        }

        if (index === 0) {
            return this.prepend(value);
        }

        if (index === this._size) {
            return this.append(value);
        }

        const newNode = new Node(value);

        let lnode = this.at(index - 1);
        let rnode = lnode.next;

        lnode.next = newNode;
        newNode.next = rnode;

        return ++this._size;
    }

    removeAt(index) {
        if (this._size === 0 || index >= this._size) {
            return null;
        }

        if (this._size === 1 || index === this._size - 1) {
            return this.pop();
        }

        let removedNode = this.at(index);

        if (index === 0) {
            this._head = this._head.next;
        } else {
            let prevNode = this.at(index - 1);
            prevNode.next = removedNode.next;
        }

        this._size--;

        return removedNode;
    }

    toString() {
        let node = this._head;

        let preview = `SIZE: ${this._size} | `;

        while (node) {
            preview += `( ${node.value} ) -> `;
            node = node.next;
        }

        return preview + "( null )";
    }
}
