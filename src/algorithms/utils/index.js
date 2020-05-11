const hasHomogeniousItems = (list = []) => {
  let isHomogeneous = true;
  if (list.length <= 1) {
    return {
      isHomogeneous,
    };
  }
  for (let i = 1; i < list.length; i++) {
    if (isHomogeneous) {
      isHomogeneous = typeof list[i] === typeof list[i - 1];
    }
  }

  return {
    isHomogeneous,
    itemType: isHomogeneous ? typeof list[0] : 'mixed',
  };
};

const getValueFrom = ({ list, atIndex, itemType }) => {
  if (itemType === 'mixed') {
    return null;
  }

  return list[atIndex];
};

const hasAllNumberType = (list = []) => {
  if (!list || !list.length) return false;
  return list.reduce((acc, curr) => (acc ? typeof curr === 'number' : acc), true);
};

const hasUniqueNumbers = (list = []) => {
  if (hasAllNumberType(list)) {
    return list.length === [...new Set(list)].length;
  }

  return false;
};

const min = (a, b) => {
  if (a === undefined) {
    return null;
  }
  if (b) {
    return a > b ? b : a;
  }
  return a;
};
const max = (a, b) => {
  if (a === undefined) {
    return null;
  }
  if (b) {
    return a > b ? a : b;
  }
  return a;
};

export default {
  hasHomogeniousItems,
  getValueFrom,
  hasAllNumberType,
  hasUniqueNumbers,
  min,
  max,
};
