import {CatalogAPI} from '../../api/catalog-api';
import {fromJS} from 'immutable';
import { createActions, handleActions } from 'redux-actions';


const defaultState = fromJS({
    items: [],
    isCatalogFetching: false,
})

export const {setCatalog, setIsCatalogFetching} = createActions({
    SET_CATALOG: (catalog) => ({catalog}),
    SET_IS_CATALOG_FETCHING: (payload) => payload
});

export const catalogReducer = handleActions(
    {
        [setCatalog]: (state, {payload: {catalog}}) => state.update('items', () => catalog),
        [setIsCatalogFetching]: (state, {payload}) => state.update('isCatalogFetching', () => payload)
    },

    defaultState
);
  

export const getCatalogThunk = () => {
    return (dispatch) => {
        dispatch(setIsCatalogFetching(true))
        CatalogAPI.getCatalog().then(response => {
            dispatch(setCatalog(response.data))
        }).finally(() => {
            dispatch(setIsCatalogFetching(false))
        })
    }
}

export default catalogReducer;
