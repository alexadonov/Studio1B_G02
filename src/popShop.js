
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';
import "./static/shop.css";
import CurrencyFormat from 'react-currency-format';


export default class PopShop extends Component {

  constructor(props) {
       super(props);
       this.state = { 
         items: []
       }
    }

    componentDidMount() {
      axios.get('http://localhost:4000/items/')
          .then(res => {
            this.setState({
              items: res.data
            })
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    addToCart(currentItem) {
      localStorage.setItem('name', currentItem.name);
    }

  render() {

    return (
      <div class="content rounded">
      <div className="App">
        <Router>
        </Router>
        <div class="jumbotron1">
          <Menu/>
          <div class="row">
            <div class="mainContent pb-4">
                <section class="pt-0 pb-5">
                            <div class="row pb-5">
                            <div class="card-deck py-3 px-4">
                        {this.state.items.map(function(currentItem, i) {
                          if (currentItem.popItem) {
                            return (
                            <div class="row">
                            <div class="card-deck py-3 px-4">
                              <div class="card" key={i}>
                                <img src={currentItem.image} class="card-img-top card-header" alt="placeholder"/>
                                <div class="card-body">
                                  <h5 class="card-title"><b>{currentItem.name}</b></h5>
                                  <p class="card-text">{currentItem.description}</p>
                                </div>
                                <div class="card-footer">
                                  <a class="price my-2"> <b><CurrencyFormat value={currentItem.price} displayType="text" thousandSeparator={true} prefix="$" /></b></a>
                                  <button class="list-group-item list-group-item-action" onClick={localStorage.setItem('name', currentItem)}>Add to Cart</button>
                                </div>
                            </div>
                          </div>
                        </div>

                          )
                      }
                        })
                      }
                         </div>
                        </div>
                </section>
            </div>
            <div class = "sideBar col-3 px-3 py-3">
                <aside>
                    <h2>FILTERS</h2>
                      <div class="list-group list-group-flush">
                          <button type="button" class="list-group-item list-group-item-action" >Dell</button>
                          <button type="button" class="list-group-item list-group-item-action" >Lenovo</button>
                          <button type="button" class="list-group-item list-group-item-action" >HP</button>
                          <button type="button" class="list-group-item list-group-item-action" >HP</button>
                          <button type="button" class="list-group-item list-group-item-action" >No Filter</button>
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

