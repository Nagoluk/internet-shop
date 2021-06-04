import {createSelector} from 'reselect';

const getCatalogItems = (state) => (state.catalog.get('items'))
export const getGoods = createSelector(getCatalogItems, goods => goods)