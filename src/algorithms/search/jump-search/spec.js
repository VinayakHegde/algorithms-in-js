import search from '.';
import TestSuite from '../../utils/test-suite';

describe('Jump Search', () => {
  const test = new TestSuite(search);
  test.common();
  test.object();
  test.special.firstFoundValueIndex();
  test.special.unsortedListFound();
});
