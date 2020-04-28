export const QuickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr.splice(0, 1);
  const lesser = [];
  const greater = [];

  arr.forEach((item) => {
    if (item <= pivot) lesser.push(item);
    else greater.push(item);
  });

  return QuickSort(lesser).concat(pivot, QuickSort(greater));
};

export default QuickSort;
