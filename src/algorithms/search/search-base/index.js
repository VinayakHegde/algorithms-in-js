class SearchBase {
  constructor(list) {
    this.update(list);
    this.act = this.props.act;
  }

  find(value) {
    return this.act({ list: this.list, value });
  }

  update(list) {
    this.list = list;
  }
}

export default SearchBase;
