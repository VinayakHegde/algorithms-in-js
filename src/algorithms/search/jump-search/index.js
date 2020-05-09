import helpers from '../../utils';
import SearchBase from '../search-base';

export const jumpSearch = (props) => {
  if (!props) return -1;
  const { list, value } = props;

  if (list === undefined || !list.length || value === undefined) {
    return -1;
  }

  const { isHomogeneous, itemType } = helpers.hasHomogeniousItems(list);
  if (!isHomogeneous) {
    return -1;
  }

  const { length } = list;
  const jump = Math.floor(Math.sqrt(length));

  let low = 0;
  let high = jump;
  let isFound = false;

  const isValueObj = typeof value === 'object';
  const valKey = isValueObj ? Object.keys(value)[0] : null;
  const seekVal = isValueObj ? Object.values(value)[0] : value;

  while (!isFound) {
    const found = helpers.getValueFrom({
      list,
      atIndex: Math.min(high, length) - 1,
      itemType,
    });
    const foundVal = isValueObj ? found[valKey] : found;

    if (seekVal > foundVal) {
      low = high;
      high += jump;
    } else {
      isFound = true;
    }

    if (low > length) {
      return -1;
    }
  }

  let index = low;
  while (index < Math.min(high, length)) {
    const found = helpers.getValueFrom({
      list,
      atIndex: index,
      itemType,
    });
    const foundVal = isValueObj ? found[valKey] : found;

    if (foundVal === seekVal) {
      return index;
    }

    index += 1;
  }

  return -1;
};

export default class Search extends SearchBase {
  get props() {
    return {
      act: jumpSearch,
      name: 'jump-search',
      category: 'algorithm',
      type: 'search',
    };
  }
}
