class HashNode {
  constructor({ key, value }) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
export const DEFAULT_SIZE = 100;

export default class HashTable {
  constructor(size = DEFAULT_SIZE) {
    this.table = Array(size).fill(null);
    this.keys = {};
  }

  hash(key) {
    let complement = 0;
    key.split('').forEach((char) => {
      complement += char.charCodeAt(0);
    });

    return complement % this.table.length;
  }

  insert(key, value) {
    this.keys[key] = this.hash(key);
    let node = this.table[this.keys[key]];
    if (!node) {
      node = new HashNode({ key, value });
    } else if (node.key === key) {
      node.value = value;
    } else {
      let nextNode = node.next;
      let notSet = true;

      if (!node.key) {
        node.key = key;
        node.value = value;
        notSet = false;
      }

      if (!nextNode && notSet) {
        node.next = new HashNode({ key, value });
        notSet = false;
      }
      while (notSet) {
        if (nextNode.key === key) {
          nextNode.value = value;
          notSet = false;
        } else {
          nextNode = nextNode.next;
        }
      }
    }
    this.table[this.keys[key]] = node;
  }

  remove(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    let node = this.table[keyHash];
    if (!node) {
      return;
    }

    if (node.key === key) {
      node.value = null;
      node.key = null;
      if (!node.next) {
        node = null;
      }
    } else {
      let nextNode = node.next;
      if (nextNode) {
        let removed = false;
        while (!removed) {
          if (nextNode.key === key) {
            nextNode.value = null;
            nextNode.key = null;
            if (!nextNode.next) {
              nextNode = null;
            }
            removed = true;
          } else {
            nextNode = nextNode.next;
          }
        }
      }
    }
    this.table[this.keys[key]] = node;
  }

  getValueByKey(key) {
    let node = this.table[this.keys[key]];
    while (node) {
      if (node.key === key) return node.value;
      node = node.next;
    }
    return null;
  }

  getValues() {
    const all = [];
    const push = ({ value }) => {
      if (value !== null) all.push(value);
    };

    this.table.forEach((node) => {
      if (node) {
        push(node);
        let nextNode = node.next;
        while (nextNode) {
          if (node.value !== null) push(nextNode);
          nextNode = nextNode.next;
        }
      }
    });
    return all;
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  contains(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
}
