import helpers from '../../utils';
import SearchBase from '../search-base';

export const fibonacciSearch = (props) => {
  let index = -1;

  if (!props) return index;

  const { list, value } = props;
  if (list === undefined || !list.length || value === undefined) {
    return index;
  }

  if (!helpers.hasAllNumberType(list)) {
    return index;
  }

  let prev = 0;
  let curr = 1;
  let next = prev + curr;

  while (next < list.length) {
    prev = curr;
    curr = next;
    next = prev + curr;
  }

  while (next > 1) {
    const loc = Math.min(index + prev, list.length - 1);

    if (list[loc] < value) {
      next = curr;
      curr = prev;
      prev = next - curr;
      index = loc;
    } else if (list[loc] > value) {
      next = prev;
      curr -= prev;
      prev = next - curr;
    } else if (list[loc] === value) {
      return loc === 0 && list.length === 2 && list[1] === value ? 1 : loc;
    } else return -1;
  }
  if (curr === 1 && list[index + 1] === value) {
    return index + 1;
  }

  return -1;
};

export default class Search extends SearchBase {
  get props() {
    return {
      act: fibonacciSearch,
      name: 'fibonacci-search',
      category: 'algorithm',
      type: 'search',
    };
  }
}
