import Sort, { bubbleSort } from '.';
import TestSuite from '../../utils/test-suite';

describe('Bubble Sort', () => {
  const test = new TestSuite(Sort);
  test.common();
  test.stringSort();
  test.special.readySortedList();
  test.special.sameItemList();
  test.special.duplicateItemsListSort();
  test.runner(bubbleSort);
});
