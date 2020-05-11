import SortBase from '../sort-base';
import helpers from '../../utils';

export const quickSort = (props) => {
  if (!props) return [];
  const { list } = props;

  if (!list || !list.length) return [];

  if (list.length <= 2) {
    const tempList = [helpers.min(list[0], list[1]), helpers.max(list[0], list[1])];
    return tempList.length === list.length ? tempList : list;
  }

  const pivot = list.shift();
  const lesser = [];
  const greater = [];

  list.forEach((item) => {
    if (item <= pivot) lesser.push(item);
    else greater.push(item);
  });
  return [...quickSort({ list: lesser }), pivot, ...quickSort({ list: greater })];
};

export default class Sort extends SortBase {
  get props() {
    return {
      act: quickSort,
      name: 'quick-sort',
      category: 'algorithm',
      type: 'sort',
    };
  }
}
