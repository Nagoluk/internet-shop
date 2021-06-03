import {combineReducers, compose, createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import catalogReducer from './reducers/catalog';
import appReducer from './reducers/app-reducer';
import basketReducer from './reducers/basket-reducer';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    catalog: catalogReducer,
    app: appReducer,
    basket: basketReducer,
    form: formReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleWare)));

export default store;