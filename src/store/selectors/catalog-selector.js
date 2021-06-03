import {createSelector} from 'reselect';

const getCatalogItems = (state) => (state.catalog.items)
export const getGoods = createSelector(getCatalogItems, goods => goods)