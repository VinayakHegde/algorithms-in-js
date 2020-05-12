import SortBase from '../sort-base';
import helpers from '../../utils';

export const insertionSort = (props) => {
  if (!props) return [];

  let { list, length } = props;

  if (!list || !list.length) return [];

  length = length || list.length;
  if (!helpers.hasUniqueNumbers(list) || length <= 1) return list;

  list = insertionSort({ list, length: length - 1 });

  const key = list[length - 1];
  let j = length - 2;
  while (j >= 0 && list[j] > key) {
    list[j + 1] = list[j];
    j--;
  }

  list[j + 1] = key;

  return list;
};

export default class Sort extends SortBase {
  get props() {
    return {
      act: insertionSort,
      name: 'insertion-sort',
      category: 'algorithm',
      type: 'sort',
    };
  }
}
