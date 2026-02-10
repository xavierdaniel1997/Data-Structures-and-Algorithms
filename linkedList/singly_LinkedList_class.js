class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insertAt(index, value){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index === 0){
            return this.prepend(value);
        }
        if(index === this.length){
            return this.append(value)
        }

        let prev = this.getNode(index - 1);
        const newNode = new Node(value);

        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    getNode(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

    update(index, value) {
    const node = this.getNode(index);
    if (!node) return false;

    node.value = value;
    return true;
  }


    removeFirst() {
    if (!this.head) return null;

    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode.value;
  }


    removeLast() {
    if (!this.head) return null;

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      prev.next = null;
      this.tail = prev;
    }

    this.length--;
    return current.value;
  }


    removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    const prev = this.getNode(index - 1);
    const removed = prev.next;

    prev.next = removed.next;
    this.length--;
    return removed.value;
  }


    search(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }

    return -1;
  }



    reverse() {
    let prev = null;
    let current = this.head;
    this.tail = current;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  

  print() {
    let result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }

  

}

const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(1, 7);

list.print(); // 5 -> 7 -> 10 -> 20

list.removeAt(2);
list.print(); // 5 -> 7 -> 20

list.reverse();
list.print(); // 20 -> 7 -> 5
