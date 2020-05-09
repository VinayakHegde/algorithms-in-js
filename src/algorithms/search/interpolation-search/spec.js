import search from '.';
import TestSuite from '../../utils/test-suite';

describe('Interpolation Search', () => {
  const test = new TestSuite(search);
  test.common();
  test.special.firstFoundValueIndex();
  test.special.unsortedListNotFound();
});
