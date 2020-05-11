import search from './search';
import sort from './sort';

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
      case ALG.SORT:
        sort(this);
        break;
      default:
        break;
    }
  }

  direct(scene, needActor) {
    return () => {
      scene(needActor ? this.actor : this.act);
    };
  }

  runner(actor) {
    const Constructor = this.actor;
    const runner = new Constructor();
    it('should test the act function', () => {
      expect(runner.act).toEqual(actor);
    });
  }
}

export default TestSuite;
