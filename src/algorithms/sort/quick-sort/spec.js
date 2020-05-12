import Sort, { quickSort } from '.';
import TestSuite from '../../utils/test-suite';

describe('Merge Sort', () => {
  const test = new TestSuite(Sort);
  test.common();
  test.stringSort();
  test.special.duplicateItemsListSort();
  test.runner(quickSort);
});
