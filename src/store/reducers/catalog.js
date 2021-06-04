import {CatalogAPI} from '../../api/catalog-api';
import {fromJS} from 'immutable';

const SET_CATALOG = 'SET_CATALOG'
const SET_IS_CATALOG_FETCHING = 'SET_IS_CATALOG_FETCHING'

const initState = fromJS({
    items: [],
    isCatalogFetching: false,
})


const catalogReducer = (state = initState, action) =>{
    switch(action.type){
        case SET_CATALOG:
            return state.update('items', () => action.payload.catalog)

        case SET_IS_CATALOG_FETCHING:
            return state.update('isCatalogFetching', () => action.payload)

        default: return state

    }
}

export const setCatalogAC = (catalog) => ({type: SET_CATALOG, payload: {catalog}})
export const setIsCatalogFetchingAC = (payload) => ({type: SET_IS_CATALOG_FETCHING, payload})

export const getCatalogThunk = () => {
    return (dispatch) => {
        dispatch(setIsCatalogFetchingAC(true))
        CatalogAPI.getCatalog().then(response => {
            dispatch(setCatalogAC(response.data))
        }).finally(() => {
            dispatch(setIsCatalogFetchingAC(false))
        })
    }
}

export default catalogReducer;
