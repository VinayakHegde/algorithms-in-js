class Queue {
  constructor() {
    this.container = [];
    this.length = 0;
  }

  enqueue(element) {
    this.container[this.length] = element;
    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    this.length -= 1;
    return this.container.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.container[0];
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.length = 0;
    this.container = [];
    return this;
  }

  enqueueOrder() {
    let index = this.length - 1;
    const elements = [];
    while (index >= 0) {
      elements.push(this.container[index]);
      index--;
    }

    return elements;
  }

  enqueueOrderToString() {
    return this.enqueueOrder().join(', ');
  }

  dequeueOrder() {
    if (this.isEmpty()) {
      return [];
    }
    return this.container;
  }

  dequeueOrderToString() {
    return this.dequeueOrder().join(', ');
  }
}

export default Queue;
