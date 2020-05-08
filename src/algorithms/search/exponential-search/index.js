import { BinarySearch } from '../binary-search';
import helpers from '../../utils';

const ExponentialSearch = props => {
  let index = -1;
  if (!props) return index;

  const { list, value } = props;

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

  let found = helpers.getValueFrom({ list, atIndex: 0, itemType });
  let foundVal = isValueObj ? found[valKey] : found;

  if (foundVal === seekVal) {
    return 0;
  }

  index = 1;

  found = helpers.getValueFrom({ list, atIndex: index, itemType });
  foundVal = isValueObj ? found[valKey] : found;

  while (index < list.length && foundVal <= seekVal) {
    index *= 2;
    if (index < list.length) {
      found = helpers.getValueFrom({ list, atIndex: index, itemType });
      foundVal = isValueObj ? found[valKey] : found;
    }
  }
  const start = Math.floor(index / 2);
  const end = Math.min(list.length - 1, index);
  return BinarySearch({ list, value, start, end });
};
ExponentialSearch.props = {
  name: 'exponential-search',
  category: 'algorithm',
  type: 'search',
};
export default ExponentialSearch;
