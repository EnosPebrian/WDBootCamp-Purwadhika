class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size += 1;
  }

  print_list() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    } else {
      let node = new Node(element);
      let curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let prev;
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
    }
  }
  removeElement(element) {
    let curr = this.head;
    let prev = null;

    while (curr.next) {
      if (curr.element === element && prev == null) {
        this.head = curr.next;
        break;
      } else if (curr.element === element) {
        prev.next = curr.next;
        break;
      }
      console.log(curr.next);
      prev = curr;
      curr = curr.next;
    }
    this.size = -1;
    return null;
  }
}

list1 = new Linkedlist();
list1.add(-1);
list1.add(0);
list1.add(1);
list1.add(2);

list1.insertAt("this", 1);
console.log(list1.head);

list1.print_list();

list1.removeElement("this");
console.log(list1.head);
list1.print_list();
