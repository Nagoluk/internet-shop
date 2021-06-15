import {Locales} from '../../localization/locales';
import {fromJS} from 'immutable';
import {handleActions, createActions} from 'redux-actions';


const defaultState = fromJS({
    theme: 'light',
    lang: Locales.ENGLISH
})

export const {setLang, setTheme} = createActions({
    SET_LANG: (lang) => ({lang}),
    SET_THEME: (theme) => ({theme})
});

export const appReducer = handleActions(
    {
        [setLang]: (state, {payload: {lang}}) => state.set('lang', lang),
        [setTheme]: (state, {payload: {theme}}) => state.set('theme', theme)
    },

    defaultState
);
  


