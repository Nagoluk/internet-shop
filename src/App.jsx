import React from 'react'
import {Catalog} from './pages/Catalog';
import {Route, Switch} from 'react-router-dom';
import {Basket} from './pages/Basket';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import {getLang, getTheme} from './store/selectors/app-selector';
import {Order} from './pages/Order';
import {BackToCatalog} from './pages/BackToCatalog';
import LangProvider from './localization/provider';



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

function App() {
  const theme = useSelector(getTheme)
  const lang = useSelector(getLang)

  return (<ThemeProvider theme={themes[theme]}>
            <LangProvider locale={lang}>
              <GlobalStyle/>
              <Switch>
                  <Route path={'/'} exact render={() =>  <Catalog/>}/>
                  <Route path={'/basket'} render={() =>  <Basket/>}/>
                  <Route path={'/order'} render={() =>  <Order/>}/>
                  <Route path={'/finish'} render={() =>  <BackToCatalog/>}/>
              </Switch>
            </LangProvider>
          </ThemeProvider>);
}

export default App;
