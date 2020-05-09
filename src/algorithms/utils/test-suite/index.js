import search from './search';

const ALG = {
  SEARCH: 'search',
  SORT: 'sort',
};

class TestSuite {
  constructor(Actor) {
    const actor = new Actor();
    const { category, type } = actor.props;

    this.actor = Actor;
    this.act = actor.act;
    if (category.toLowerCase() === 'algorithm') {
      this.algorithm(type.toLowerCase());
    }
  }

  algorithm(type) {
    switch (type) {
      case ALG.SEARCH:
        search(this);
        break;
      default: break;
    }
  }

  direct(scene, needActor) {
    return () => {
      scene(needActor ? this.actor : this.act);
    };
  }

  runner(actor) {
    const Search = this.actor;
    const srch = new Search();
    it('should test the act function', () => {
      expect(srch.act).toEqual(actor);
    });
  }
}

export default TestSuite;
