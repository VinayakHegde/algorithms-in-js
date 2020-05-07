import helpers from '../../utils';

export const JumpSearch = ({ list, value }) => {
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

export default JumpSearch;
