class AlgorithBase {
  constructor(list) {
    this.update(list);
    if (this.props) {
      this.act = this.props.act;
    }
  }

  update(list) {
    this.list = list;
  }
}

export default AlgorithBase;
