
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

       this.addToCart = this.addToCart.bind(this);
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

    addToCart(e) {
      e.preventDefault();
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
                                  <button class="list-group-item list-group-item-action" onClick={function() {
                                    // localStorage.setItem('productName', currentItem.name);
                                    // localStorage.setItem('productId', currentItem._id);
                                    // localStorage.setItem('productRetailerid', currentItem.retailerId);
                                    // localStorage.setItem('productPrice', currentItem.price);

                                    const newItem = {
                                      customerId: localStorage.getItem('userid'),
                                      retailerId: currentItem.retailerId,
                                      productId: currentItem._id,
                                      name: currentItem.name,
                                      price: currentItem.price
                                    }
                                    axios.post('http://localhost:4000/cart/add', newItem)
                                      .then(response => {
                                          alert("Item added to cart!")
                                          return;
                                      })
                                      .catch(function (error){
                                        console.log('What happened? ' + error);
                                      })

                                  }}>Add to Cart</button>
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
            <div class = "sideBar col-2 px-2 py-2">
            </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

