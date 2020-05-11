import AlgorithBase from '../../algorithm-base';

class SortBase extends AlgorithBase {
  sort(direction = 'asc') {
    if (this.act) {
      return this.act({ list: this.list, direction });
    }
    return [];
  }
}

export default SortBase;
