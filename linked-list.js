/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.tail === null) this.tail = newNode;

    newNode.next = this.head;

    this.head = newNode;
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let popped = this.tail;

    this.length -= 1;

    while (current !== null) {
      if (current.next === null) {
        this.tail = null;
        this.head = null;
      } else if (current.next === this.tail){
        this.tail = current;
        current.next = null;
      }
      current = current.next;
    }
    return popped.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let shifted = this.head;
    this.length -= 1;

    if (this.tail === shifted) this.tail = null;

    this.head = shifted.next;

    return shifted.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === idx) {
        return current.val;
      }
      i += 1;
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === idx) {
        current.val = val;
      }
      i += 1;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    
    if (this.length === 0) {
      this.tail = newNode;
    }

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }


    // idx !== 0
    let current = this.head;
    let i = 0;
    while (i < idx) {
      if (i === idx - 1) {
        let nextNode = current.next;
        current.next = newNode;
        newNode.next = nextNode;
        if (this.tail === current) {
          this.tail = newNode;
        }
      }
      i += 1;
      current = current.next;
    }

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let returnValue = null;
    if (this.length === 0) {
      returnValue = "empty";
    }

    if (this.length === 1) {
      returnValue = this.head;
      this.head = null;
      this.tail = null;
    } else if (idx === 0) {
      returnValue = this.head;
      this.head = this.head.next;
    }

    let current = this.head;
    let i = 0;
    while (i < idx) {
      if (i === idx - 1) {
        returnValue = current.next.val;
        current.next = current.next.next;
      }
      i += 1;
      current = current.next;
    }
    this.length -= 1;
    return returnValue;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let current = this.head;

    if (this.length === 0) return 0;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
