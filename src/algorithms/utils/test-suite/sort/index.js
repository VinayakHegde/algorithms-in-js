import CommonSort from './common';
import { ReadySortedList, SameItemList } from './special';

export default (ctx) => {
  ctx.common = ctx.direct(CommonSort);
  ctx.special = {
    readySortedList: ctx.direct(ReadySortedList),
    sameItemList: ctx.direct(SameItemList),
  };
};
