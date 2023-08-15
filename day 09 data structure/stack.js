class Stack {
  #maxSize;
  #container = [];

  constructor(maxsize) {
    this.#maxSize = maxsize;
  }
  #isFull() {
    //pass
  }
  #isEmpty() {
    //pass
  }
  push(element) {
    if (this.#container.length < this.#maxSize) {
      console.log(`add`, element);
      this.#container.push(element);
    } else {
      console.log(`cannot add`, element, `(full)`);
    }
    this.getElements();
  }

  pop() {
    console.log(`remove`, this.#container.pop());
    this.getElements();
  }

  getElements() {
    return console.log(this.#container);
  }
}

const stack = new Stack(5);

stack.push("apple");
stack.push("mango");
stack.push("orange");
stack.push("melon");
stack.push("grape");
stack.push("plum");

stack.pop();
stack.pop();
stack.pop();
stack.remove;
