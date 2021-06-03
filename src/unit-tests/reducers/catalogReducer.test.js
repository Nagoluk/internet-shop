import catalogReducer, {setCatalogAC} from '../../store/reducers/catalog';

const state = {
    items: [],
    isCatalogFetching: false,
}


it('Items should setted to catalog', ()=> {
    let action = setCatalogAC([{
        "_id": "60b7d25ae96e1dd509c11909",
        "name": "Bizmatic",
        "logo": "https://via.placeholder.com/100",
        "price": 45
    }])
    let newState = catalogReducer(state, action)

    expect(newState.items.length).toBe(1)
})

