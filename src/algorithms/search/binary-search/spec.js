import search, { binarySearch } from '.';
import TestSuite from '../../utils/test-suite';

describe('Binary Search', () => {
  const test = new TestSuite(search);
  test.common();
  test.object();
  test.default();
  test.special.firstFoundValueIndex();
  test.special.unsortedListNotFound();
  test.runner(binarySearch);
});
