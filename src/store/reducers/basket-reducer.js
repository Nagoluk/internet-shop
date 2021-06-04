import {fromJS, List} from 'immutable';

const ADD_TO_BASKET = 'ADD_TO_BASKET'
const CHANGE_VALUE = 'CHANGE_VALUE'
const SET_BASKET = 'SET_BASKET'
const SET_REDIRECT_TO_FINISH = 'SET_REDIRECT_TO_FINISH'

const initState = fromJS({
    items: [],
    redirectToFinish: false
})

const basketReducer = (state = initState, action) =>{
    switch(action.type){
        case ADD_TO_BASKET:
            const thisGoodInBasket = state.get('items').find(item => item._id === action.payload.item._id)

            if(thisGoodInBasket){
                const temp = {...action.payload.item, amount: thisGoodInBasket.amount + 1}
                temp.price = temp.price * temp.amount

                return state.update('items', items => items.filter(item => item._id !== thisGoodInBasket._id).push(temp))

            }else {
                const temp = {...action.payload.item, amount: 1}

                return state.update('items', items => items.push(temp))
            }


        case CHANGE_VALUE:
            if(action.payload.value > 0){
                return state.update('items', items => items.map(item => {
                    if(item._id !== action.payload._id){
                        return item
                    }else {
                        return {...item, amount: action.payload.value}
                    }
                }))
            }else {
                return state.update('items', items => items.filter(item => item._id !== action.payload._id))
            }


        case SET_BASKET:
            return state.update('items', () => action.payload.basket)

        case SET_REDIRECT_TO_FINISH:
            return state.update('redirectToFinish', redirectToFinish => action.payload)

        default: return state
    }
}

export const setBasketAC = (basket) => ({type: SET_BASKET, payload: {basket}})
export const addToBasketAC = (item) => ({type: ADD_TO_BASKET, payload: {item}})
export const changeAmountAC = (value, _id) => ({type: CHANGE_VALUE, payload: {value, _id}})
export const setRedirectToFinish = (payload) => ({type: SET_REDIRECT_TO_FINISH, payload})

export const sendOrderThunk = ({name, email, code, city}) => {
    return (dispatch, getState) => {
        const orderList = getState().basket.get('items')

        const isConfirm = window.confirm('Your order:' + JSON.stringify(orderList))

        if(isConfirm) {
            dispatch(setBasketAC(List([])))
            dispatch(setRedirectToFinish(true))
        }
    }
}



export default basketReducer
