import helpers from './utils';

export const BinarySearch = ({ list, value }) => {
  let itemAtIndex = -1;

  if (list === undefined || !list.length || value === undefined) {
    return itemAtIndex;
  }
  const { isHomogeneous, itemType } = helpers.hasHomogeniousItems(list);
  if (!isHomogeneous) {
    return itemAtIndex;
  }
  let low = 0;
  let high = list.length - 1;
  let isFound = false;

  const isValueObj = typeof value === 'object';
  const valKey = isValueObj ? Object.keys(value)[0] : null;
  const seekVal = isValueObj ? Object.values(value)[0] : value;

  while (!isFound && low <= high) {
    itemAtIndex = Math.floor((high + low) / 2);
    const found = helpers.getValueFrom({
      list,
      itemAtIndex,
      itemType,
    });

    const foundVal = isValueObj ? found[valKey] : found;

    if (foundVal === seekVal) {
      low = null;
      high = null;
      isFound = true;
    }
    if (!isFound) {
      if (foundVal < seekVal) {
        low = itemAtIndex + 1;
      } else {
        high = itemAtIndex - 1;
      }
    }
  }

  return isFound ? itemAtIndex : -1;
};

export default BinarySearch;
