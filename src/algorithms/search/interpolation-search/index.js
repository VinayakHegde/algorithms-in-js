import SearchBase from '../search-base';

export const interpolationSearch = (props) => {
  if (!props) return -1;
  const { list, value, start, end } = props;
  if (list === undefined || !list.length || value === undefined) return -1;

  if (list.length === 1) {
    if (list[0] === value) return 0;
    return -1;
  }
  if (
    list.reduce(
      (acc, cur) => {
        if (typeof cur === 'number') acc += 1;
        return acc;
      },
      typeof value === 'number' ? 0 : -1,
    ) !== list.length
  ) {
    return -1;
  }
  let low = start || 0;
  if (list[low] === value) return low;

  let high = end || list.length - 1;
  if (list[high] === value) return high;

  if (low <= high && value >= list[low] && value <= list[high]) {
    const delta = (value - list[low]) / (list[high] - list[low]);
    const position = low + Math.floor((high - low) * delta);
    if (list[position] === value) return position;
    if (list[position] < value) low = position + 1;
    else high = position - 1;
    return interpolationSearch({ list, value, start: low, end: high });
  }
  return -1;
};

export default class Search extends SearchBase {
  get props() {
    return {
      act: interpolationSearch,
      name: 'interpolation-search',
      category: 'algorithm',
      type: 'search',
    };
  }
}
