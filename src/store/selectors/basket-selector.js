import {createSelector} from 'reselect';

const getBasketItems = (state) => (state.basket.get('items'))
export const getBasket = createSelector(getBasketItems, basket => basket)
export const getTotalCount = createSelector(getBasketItems, basket => basket.reduce((a, b) =>{
        return a + (b.amount * b.price)
}, 0))

export const getBasketLength = createSelector(getBasketItems, basket => basket.size)
export const getRedirectToFinish = (state) => (state.basket.get('redirectToFinish'))