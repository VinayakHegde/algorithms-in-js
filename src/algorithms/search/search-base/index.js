import AlgorithBase from '../../algorithm-base';

class SearchBase extends AlgorithBase {
  find(value) {
    if (this.act) {
      return this.act({ list: this.list, value });
    }
    return -1;
  }
}

export default SearchBase;
