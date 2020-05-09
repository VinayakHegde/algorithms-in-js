import helpers from '../../utils';
import SearchBase from '../search-base';

export const binarySearch = (props) => {
  let index = -1;
  if (!props) return index;

  const { list, value, start, end } = props;

  if (list === undefined || !list.length || value === undefined) {
    return index;
  }
  const { isHomogeneous, itemType } = helpers.hasHomogeniousItems(list);
  if (!isHomogeneous) {
    return index;
  }
  const isValueObj = typeof value === 'object';
  const valKey = isValueObj ? Object.keys(value)[0] : null;
  const seekVal = isValueObj ? Object.values(value)[0] : value;

  const low = start || 0;
  const high = end || list.length - 1;

  if (high < low) return index;

  let found = helpers.getValueFrom({ list, atIndex: low, itemType });
  let foundVal = isValueObj ? found[valKey] : found;

  if (foundVal === seekVal) return low;
  if (foundVal > seekVal) return index;

  if (low <= high) {
    index = Math.min(list.length, Math.floor((high + low) / 2));
    found = helpers.getValueFrom({ list, atIndex: index, itemType });
    foundVal = isValueObj ? found[valKey] : found;

    if (foundVal === seekVal) {
      return index;
    }
    if (foundVal > seekVal) {
      return binarySearch({ list, value, start: low, end: index - 1 });
    }
    return binarySearch({ list, value, start: index + 1, end: high });
  }
  return -1;
};

export default class Search extends SearchBase {
  get props() {
    return {
      act: binarySearch,
      name: 'binary-search',
      category: 'algorithm',
      type: 'search',
    };
  }
}
