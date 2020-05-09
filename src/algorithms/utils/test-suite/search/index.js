import CommonSearch from './common';
import CommonSearchObject from './object';
import CommonSearchDefault from './default';
import { FirstFoundValueIndex, UnsortedListNotFound } from './special';

export default ctx => {
  ctx.common = ctx.direct(CommonSearch);
  ctx.object = ctx.direct(CommonSearchObject);
  ctx.default = ctx.direct(CommonSearchDefault, true);
  ctx.special = {
    firstFoundValueIndex: ctx.direct(FirstFoundValueIndex),
    unsortedListNotFound: ctx.direct(UnsortedListNotFound),
  };
};
