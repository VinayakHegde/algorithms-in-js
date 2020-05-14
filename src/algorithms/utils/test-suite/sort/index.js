import CommonSort from './common';
import StringSort from './string';
import { ReadySortedList, SameItemList, DuplicateItemsListUnsort, DuplicateItemsListSort } from './special';

export default (ctx) => {
  ctx.common = ctx.direct(CommonSort);
  ctx.stringSort = ctx.direct(StringSort);
  ctx.special = {
    readySortedList: ctx.direct(ReadySortedList),
    sameItemList: ctx.direct(SameItemList),
    duplicateItemsListUnsort: ctx.direct(DuplicateItemsListUnsort),
    duplicateItemsListSort: ctx.direct(DuplicateItemsListSort),
  };
};
