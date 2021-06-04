import React from 'react'
import {Catalog} from './pages/Catalog';
import {Route, Switch} from 'react-router-dom';
import {Basket} from './pages/Basket';
import {Order} from './pages/Order';
import {BackToCatalog} from './pages/BackToCatalog';


function App() {
  return (<div>
              <Switch>
                  <Route path={'/'} exact render={() =>  <Catalog/>}/>
                  <Route path={'/basket'} render={() =>  <Basket/>}/>
                  <Route path={'/order'} render={() =>  <Order/>}/>
                  <Route path={'/finish'} render={() =>  <BackToCatalog/>}/>
              </Switch>
            </div>)
}

export default App;
