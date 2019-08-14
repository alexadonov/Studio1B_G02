
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";


export default class Home extends Component {


  render() {
    return (
        <div className="App">
          <Menu/>
          <div class="jumbotron">
            <h1 class="display-4">Welcome to Group 02's online shop</h1>
            <p class="lead">You can browse and buy a variety of computers here.</p>
            <hr class="my-4"/>
            <p>Shop now to secure our opening deals</p>
            <a class="btn btn-primary btn-lg" href="shop" role="button">Shop now!</a>
          </div>
      </div>
    );
  }
}
