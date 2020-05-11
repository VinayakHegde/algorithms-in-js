import Sort, { mergeSort } from '.';
import TestSuite from '../../utils/test-suite';

describe('Merge Sort', () => {
  const test = new TestSuite(Sort);
  test.common();
  test.special.readySortedList();
  test.special.sameItemList();
  test.runner(mergeSort);
});
