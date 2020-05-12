import Sort, { insertionSort } from '.';
import TestSuite from '../../utils/test-suite';

describe('insertion Sort', () => {
  const test = new TestSuite(Sort);
  test.common();
  test.special.readySortedList();
  test.special.sameItemList();
  test.special.duplicateItemsListUnsort();
  test.runner(insertionSort);
});
