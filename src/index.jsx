import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import store from './store/store';
import LangProvider from './localization/provider';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {getLang, getTheme} from './store/selectors/app-selector';

const themes = {
    dark: {
        primary: '#2b5278',
        backgroundForComponents: 'rgb(43, 43, 43)',
        background: 'rgb(60, 63, 65)',
        text: '#fff'
    },

    light: {
        primary: '#2b5278',
        backgroundForComponents: '#fff',
        background: 'lightgray',
        text: '#000'
    }
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }
`

const StoreAndReactRouterProviders = ({children}) => {
    return <BrowserRouter>
                <Provider store={store}>
                    {children}
                </Provider>
           </BrowserRouter>
}

const ThemeAndLocalizationProvider = ({children}) => {
    const theme = useSelector(getTheme)
    const lang = useSelector(getLang)

    return <ThemeProvider theme={themes[theme]}>
                <GlobalStyle/>
                <LangProvider locale={lang}>
                    {children}
                </LangProvider>
            </ThemeProvider>

}


export const UniversalProvider = ({children}) => {
    return <StoreAndReactRouterProviders>
                <ThemeAndLocalizationProvider>
                    {children}
                </ThemeAndLocalizationProvider>
            </StoreAndReactRouterProviders>
}


ReactDOM.render(<UniversalProvider><App/></UniversalProvider>,
    document.getElementById('root') || document.createElement('div')) ;// for testing purposes )

reportWebVitals();
