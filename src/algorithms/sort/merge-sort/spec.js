import Sort, { mergeSort } from '.';
import TestSuite from '../../utils/test-suite';

describe('Merge Sort', () => {
  const test = new TestSuite(Sort);
  test.common();
  test.stringSort();
  test.special.readySortedList();
  test.special.sameItemList();
  test.special.duplicateItemsListSort();
  test.runner(mergeSort);
});
