import basketReducer, {addToBasketAC, changeAmountAC} from '../../store/reducers/basket-reducer';
import {fromJS} from 'immutable';

const state = fromJS({
    items: [],
    redirectToFinish: false
})

const good =  {
        "_id": "60b7d25ae96e1dd509c11909",
        "name": "Bizmatic",
        "logo": "https://via.placeholder.com/100",
        "price": 45,
}

it('It should be add to basket', ()=> {
    let action = addToBasketAC(good)
    let newState = basketReducer(state, action)

    expect(newState.get('items').size).toBe(1)
})


it('It should be change for added good', ()=> {
    let stateWithAddedGood = basketReducer(state, addToBasketAC(good))
    let newState = basketReducer(stateWithAddedGood, changeAmountAC(2, good._id))

    expect(newState.getIn(['items', '0', 'amount'])).toBe(2)
})

