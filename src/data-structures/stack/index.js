class Stack {
  constructor() {
    this.container = [];
    this.length = 0;
  }

  push(element) {
    this.container[this.length] = element;
    this.length += 1;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.length -= 1;
    return this.container.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.container[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.length = 0;
    this.container = [];
    return this;
  }

  pushOrder() {
    if (this.isEmpty()) {
      return [];
    }
    return this.container;
  }

  pushOrderToString() {
    return this.pushOrder().join(', ');
  }

  popOrder() {
    let index = this.length - 1;
    const elements = [];
    while (index >= 0) {
      elements.push(this.container[index]);
      index--;
    }

    return elements;
  }

  popOrderToString() {
    return this.popOrder().join(', ');
  }
}

export default Stack;
