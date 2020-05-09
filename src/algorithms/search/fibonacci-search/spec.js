import search from '.';
import TestSuite from '../../utils/test-suite';

describe('Fibonacci Search', () => {
  const test = new TestSuite(search);
  test.common();
  test.special.unsortedListNotFound();
  test.special.lastFoundValueIndex();
});
