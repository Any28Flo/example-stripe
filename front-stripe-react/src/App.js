import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Navigation from "./components/Navigation/Navigation";

import Home from "./components/Home/Home";
import Customers from "./components/Customers/Customers";
import Payments from "./components/Payments/Payments";
import Suscriptions from "./components/Suscriptions/Suscriptions";

const  App = ()=> {
  return (
      <>
          <Navigation/>
          <Switch>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/checkout">
              <Home/>
            </Route>
            <Route path="/payments">
              <Payments/>
            </Route>
            <Route path="/customers">
              <Customers/>
            </Route>
            <Route path="/subscriptions">
               <Suscriptions/>
            </Route>
          </Switch>
      </>
  );
}

export default App;
