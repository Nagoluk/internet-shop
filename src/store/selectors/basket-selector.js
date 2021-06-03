import {createSelector} from 'reselect';

const getBasketItems = (state) => (state.basket.items)
export const getBasket = createSelector(getBasketItems, basket => basket)
export const getTotalCount = createSelector(getBasketItems, basket => basket.reduce((a, b) =>{
        return a + (b.amount * b.price)
}, 0))

export const getBasketLength = createSelector(getBasketItems, basket => basket.length)
export const getRedirectToFinish = (state) => (state.basket.redirectToFinish)