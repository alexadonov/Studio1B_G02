
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";


export default class Shop extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Menu/>
        </Router>
      </div>
    );
  }
}
