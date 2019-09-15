class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  insertAfter(value) {
    /**
     * Instantiates a new Node with the given value
     * and inserts it after this Node.
     */
    let currentNext = this.next;
    this.next = new Node(value, this, currentNext);
    if (currentNext !== null) currentNext.prev = this.next;
  }

  insertBefore(value) {
    /**
     * Instantiates a new Node with the given value
     * and inserts it before this Node.
     */
    let currentPrev = this.prev;
    this.prev = new Node(value, currentPrev, this);
    if (currentPrev !== null) currentPrev.next = this.prev;
  }

  delete() {
    /**
     * Rearranges this Node's previous and next pointers,
     * effectively deleting this Node and allowing for
     * garbage collection to clean it up.
     */
    if (this.prev !== null) this.prev.next = this.next;
    if (this.next !== null) this.next.prev = this.prev;
  }
}

class DoublyLinkedList {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
    this.length = node ? 1 : 0;
  }

  length() {
    /**
     * Returns the length of the current list
     */
    return self.length;
  }

  addTohead(value) {
    /**
     * Instantiates a new Node and inserts it as the new head
     * of the list.
     */
    let newNode = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addToTail(value) {
    /**
     * Instantiates a new Node and inserts it as the new tail
     * of the list.
     */
    let newNode = new Node(value);
    this.length++;
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

const node = new Node(1);
node.insertBefore(5);
console.log(node);
node.insertAfter(3);
console.log(node);
