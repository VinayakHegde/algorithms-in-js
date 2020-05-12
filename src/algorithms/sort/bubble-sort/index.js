import SortBase from '../sort-base';

export const bubbleSort = (props) => {
  if (!props) return [];

  const { list, length: len } = props;

  if (!list || !list.length) return [];

  const length = len || list.length;

  if (length === 1) return list;

  for (let index = 0; index < length - 1; index++) {
    if (list[index] > list[index + 1]) {
      [list[index], list[index + 1]] = [list[index + 1], list[index]];
    }
  }

  return bubbleSort({ list, length: length - 1 });
};

export default class Sort extends SortBase {
  get props() {
    return {
      act: bubbleSort,
      name: 'bubble-sort',
      category: 'algorithm',
      type: 'sort',
    };
  }
}
