import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./components/styles.css"
import { BrowserRouter as Router } from "react-router-dom";


export default class Shop extends Component {

  render() {
    return (
    <div class="container">
        <Router>
        <Menu/>
            <div className="App">
                <div class="jumbotron">
                    <div class="shadow p-3 mb-5 bg-white rounded">
                        <h1 class="display-4">Customer</h1>
                    </div>
                    <p>Shop now to secure our opening deals</p>
                    <a class="btn btn-primary btn-lg" href="sign-in" role="button">Shop now!</a>
                </div>
            </div>
        </Router>
    </div>
    );
  }
}