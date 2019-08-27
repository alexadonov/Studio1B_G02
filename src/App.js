
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from 'react-router-dom';

import Home from "./home.js";
import Shop from "./shop.js";
import Signin from "./sign-in.js";
import Cart from "./cart.js";
import Purchase from "./purchaseHistory.js"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact={true} path='/' render={() => (
              <div className="App">
                <Home />
              </div>
            )}/>

            <Route exact={true} path='/shop' render={() => (
              <div className="App">
                <Shop />
              </div>
            )}/>

            <Route exact={true} path='/sign-in' render={() => (
              <div className="App">
                <Signin />
              </div>
            )}/>

            <Route exact={true} path='/cart' render={() => (
              <div className="App">
                <Cart />
              </div>
                )} />

            <Route exact={true} path='/purchaseHistory' render={() => (
                <div className="App">
                    <Purchase />
                </div>
            )} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
