export const InterpolationSearch = ({ list, value }) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const valDiff = list[end] - list[start];
    if (!valDiff) {
      return list[start] === value ? start : -1;
    }

    const delta = value - list[start];
    if (delta < 0) {
      return -1;
    }

    const indexDelta = end - start;
    const index = start + Math.floor(delta * indexDelta / valDiff);

    if (list[index] === value) {
      return index;
    }

    if (list[index] < value) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }

  return -1;
};

export default InterpolationSearch;
