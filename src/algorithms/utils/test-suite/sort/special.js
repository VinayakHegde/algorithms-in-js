export const SameItemList = (sort) => {
  const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  it('should return same item list when passed', () => {
    expect(sort({ list: equalArr })).toEqual(equalArr);
  });
};

export const DuplicateItemsListUnsort = (sort) => {
  const dupItemsList = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];
  it('should unsort the DuplicateItems list when passed', () => {
    expect(sort({ list: dupItemsList })).toEqual(dupItemsList);
  });
};

export const DuplicateItemsListSort = (sort) => {
  const dupItemsList = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2];
  it('should sort the DuplicateItems list when passed', () => {
    expect(sort({ list: dupItemsList })).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  });
};

export const ReadySortedList = (sort) => {
  const sortedArrAsc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  it('should return the same sorted list when passed', () => {
    expect(sort({ list: sortedArrAsc })).toEqual(sortedArrAsc);
  });
};

export default {};
