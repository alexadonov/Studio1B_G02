
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import "./components/shop.css";

import product1 from "./components/img/Blackwidow Keyboard.jpg";
import product2 from "./components/img/Logitech G502 Mousepad.jpeg";
import product3 from "./components/img/Lixon Mini Speaker.jpg";


export default class Shop extends Component {

  render() {
    return (
      <div class="content rounded">
      <div className="App">
        <Router>
        </Router>
        <div class="jumbotron1">
          <Menu/>
          <div class="row">
            <div class = "mainContent col-10">
                <section>
                        <div class="row">
                        <div class="card-deck py-3 px-4">
                          <div class="card">
                            <img src={product1} class="card-img-top card-header" alt="hi"/>
                            <div class="card-body">
                              <h5 class="card-title"><b>Keyboard</b></h5>
                              <p class="card-text">Razor BlackWidow Mechanical Keyboard</p>
                            </div>
                            <div class="card-footer">
                              <a class="price"><b>$299</b></a>
                            </div>
                          </div>
                          <div class="card">
                            <img src={product2}  class="card-img-top card-header" alt="wd"/>
                            <div class="card-body">
                              <h5 class="card-title"><b>Mouse</b></h5>
                              <p class="card-text">Logitech G502 Gaming Mouse</p>
                            </div>
                            <div class="card-footer">
                              <a class="price"><b>$120</b></a>
                            </div>
                          </div>
                          <div class="card">
                            <img src={product3} class="card-img-top card-header" alt="dwq"/>
                            <div class="card-body">
                              <h5 class="card-title"><b>Speaker</b></h5>
                              <p class="card-text">Lixon Mini Speaker</p>
                            </div>
                            <div class="card-footer">
                              <a class="price"><b>$59</b></a>
                            </div>
                        </div>
                        </div>
                      </div>
                </section>
            </div>

            <div class = "sideBar col-3 px-4 py-3">
                <aside>
                    <h2>FILTERS</h2>
                      <div class="list-group list-group-flush">
                          <button type="button" class="list-group-item list-group-item-action">Keyboard</button>
                          <button type="button" class="list-group-item list-group-item-action">Mouse</button>
                          <button type="button" class="list-group-item list-group-item-action">Webcam</button>
                          <button type="button" class="list-group-item list-group-item-action">Fan</button>
                          <button type="button" class="list-group-item list-group-item-action">Speaker</button>
                          <button type="button" class="list-group-item list-group-item-action">Cleaner</button>
                    </div>
                </aside>
            </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
