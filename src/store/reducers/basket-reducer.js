const ADD_TO_BASKET = 'ADD_TO_BASKET'
const CHANGE_VALUE = 'CHANGE_VALUE'
const SET_BASKET = 'SET_BASKET'
const SET_REDIRECT_TO_FINISH = 'SET_REDIRECT_TO_FINISH'

const initState = {
    items: [],
    redirectToFinish: false
}

const basketReducer = (state = initState, action) =>{
    switch(action.type){
        case ADD_TO_BASKET:
            let thisGoodInBasket = state.items.find(item => item._id === action.payload.item._id)
            let temp;

            if(thisGoodInBasket){
                temp = {...action.payload.item, amount: thisGoodInBasket.amount + 1}
                temp.price = temp.price * temp.amount

                return {
                    ...state,
                    items: [...state.items.filter(item => item._id !== thisGoodInBasket._id), temp]
                }

            }else {
                temp = {...action.payload.item, amount: 1}

                return {
                    ...state,
                    items: [...state.items, temp]
                }
            }


        case CHANGE_VALUE:
            let amountChanged;

            if(action.payload.value > 0){
                amountChanged = state.items.map(item => {
                    if(item._id !== action.payload._id){
                        return item
                    }else {
                        return {...item, amount: action.payload.value}
                    }
                })
            }else {
                amountChanged = state.items.filter(item => item._id !== action.payload._id)
            }

            return {
                ...state,
                items: amountChanged
            }

        case SET_BASKET:
            return {
                ...state,
                items: action.payload.basket
            }

        case SET_REDIRECT_TO_FINISH:
            return {
                ...state,
                redirectToFinish: action.payload
            }

        default: return state
    }
}

export const setBasketAC = (basket) => ({type: SET_BASKET, payload: {basket}})
export const addToBasketAC = (item) => ({type: ADD_TO_BASKET, payload: {item}})
export const changeAmountAC = (value, _id) => ({type: CHANGE_VALUE, payload: {value, _id}})
export const setRedirectToFinish = (payload) => ({type: SET_REDIRECT_TO_FINISH, payload})

export const sendOrderThunk = ({name, email, code, city}) => {
    return (dispatch, getState) => {
        const orderList = getState().basket.items

        const isConfirm = window.confirm('Your order:' + JSON.stringify(orderList))

        if(isConfirm) {
            dispatch(setBasketAC([]))
            dispatch(setRedirectToFinish(true))
        }
    }
}



export default basketReducer
