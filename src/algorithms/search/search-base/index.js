class SearchBase {
  constructor(list) {
    this.update(list);
    if (this.props) {
      this.act = this.props.act;
    }
  }

  find(value) {
    if (this.act) {
      return this.act({ list: this.list, value });
    }
    return -1;
  }

  update(list) {
    this.list = list;
  }
}

export default SearchBase;
