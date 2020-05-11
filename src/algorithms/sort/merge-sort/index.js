import SortBase from '../sort-base';

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
};

export const mergeSort = (props) => {
  if (!props) return [];
  const { list } = props;
  if (!list || !list.length) return [];
  if (list.length < 2) return list;

  const middle = parseInt(list.length / 2, 10);
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);

  return merge(mergeSort({ list: left }), mergeSort({ list: right }));
};

export default class Sort extends SortBase {
  get props() {
    return {
      act: mergeSort,
      name: 'merge-sort',
      category: 'algorithm',
      type: 'sort',
    };
  }
}
