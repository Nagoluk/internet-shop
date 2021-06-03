import basketReducer, {changeAmountAC} from '../../store/reducers/basket-reducer';

const state = {
    items: [{
        "_id": "60b7d25ae96e1dd509c11909",
        "name": "Bizmatic",
        "logo": "https://via.placeholder.com/100",
        "price": 45,
        "amount": 1
    }],
    redirectToFinish: false
}

it('Should set new count for items', ()=> {
    let action = changeAmountAC(2, '60b7d25ae96e1dd509c11909')
    let newState = basketReducer(state, action)

    expect(newState.items[0].amount).toBe(2)
})

