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

const getValueFrom = ({ list, itemAtIndex, itemType }) => {
  if (itemType === 'mixed') {
    return null;
  }

  return list[itemAtIndex];
};

export default {
  hasHomogeniousItems,
  getValueFrom,
};
