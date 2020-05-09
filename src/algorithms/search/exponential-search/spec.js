import search from '.';
import TestSuite from '../../utils/test-suite';

describe('Exponential Search', () => {
  const test = new TestSuite(search);
  test.common();
  test.special.unsortedListFound();
  test.special.firstFoundValueIndex();
});
