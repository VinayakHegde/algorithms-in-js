import CommonSearch from './common/search';
import CommonSearchObject from './common/search/object';

const ALG = {
  SEARCH: 'search',
  SORT: 'sort',
};

class TestSuite {
  constructor(testConstructure) {
    this.testConstructure = testConstructure;
    const { category, type } = testConstructure.props;

    if (category.toLowerCase() === 'algorithm') {
      this.algorithm(type.toLowerCase());
    }
  }

  algorithm(type) {
    switch (type) {
      case ALG.SEARCH:
        this.common = this.runner(CommonSearch);
        this.object = this.runner(CommonSearchObject);
        break;
      default: break;
    }
  }

  runner(specific) {
    return () => {
      specific(this.testConstructure);
    };
  }
}

export default TestSuite;
