
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from 'react-router-dom';

import Home from "./home.js";
import Shop from "./shop.js";
import Signin from "./sign-in.js";
import Cart from "./cart.js";
import Purchase from "./purchaseHistory.js";
import Profile from "./custProfile.js";

import EditCust from "./editCustProfile.js";

import Address from "./Address.js";
import CreateUser from "./create-user";
import EditUser from "./edit-user";
import CreateItem from "./createItem.js";
import RetailerProfile from "./retailerProfile";
import RetailerProducts from "./retailerProducts";

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

            <Route exact={true} path='/Address' render={() => (
              <div className="App">
                <Address />
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

            <Route exact={true} path='/custProfile' render={() => (
              <div className="App">
                <Profile />
              </div>

             )} />

            <Route exact={true} path='/editCustProfile' render={() => (
                <div className="App">
                    <EditCust />
                </div>
            )} />

            <Route exact={true} path='/create-user' render={() => (
                <div className="App">
                    <CreateUser />
                </div>
            )} />

            <Route exact={true} path='/edit-user' render={() => (
                <div className="App">
                    <EditUser />
                </div>
            )} />

            <Route exact={true} path='/create-item' render={() => (
                <div className="App">
                    <CreateItem />
                </div>
            )} />

              <Route exact={true} path='/retailerProfile' render={() => (
                  <div className="App">
                      <RetailerProfile />
                  </div>
              )} />

              <Route exact={true} path='/retailerProducts' render={() => (
                  <div className="App">
                      <RetailerProducts />
                  </div>
              )} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
