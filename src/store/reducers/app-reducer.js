import {Locales} from '../../localization/locales';
import {fromJS} from 'immutable';

const SET_THEME = 'SET_THEME'
const SET_LANG = 'SET_LANG'

const initState = fromJS({
    theme: 'light',
    lang: Locales.ENGLISH
})

const appReducer = (state = initState, action) =>{
    switch(action.type){
        case SET_THEME:
            return state.set('theme', action.payload)

        case SET_LANG:
            return state.set('lang', action.payload)

        default: return state

    }
}

export const setThemeAC = (theme) => ({type: SET_THEME, payload: theme})
export const setLangAC = (lang) => ({type: SET_LANG, payload: lang})

export default appReducer
