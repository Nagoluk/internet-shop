import {createSelector} from 'reselect';

const getCatalogItems = (state) => (state.catalog.get('items'))
export const getCatalogFetching = (state) => (state.catalog.get('isCatalogFetching'))
export const getGoods = createSelector(getCatalogItems, goods => goods)