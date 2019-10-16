
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
         items: [],
         history: [],
         countArr: []
       }

       this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:4000/history/').then(res => {
        this.setState({
          history: res.data.productId
        })
        var hist = this.state.history

        const uniqueId = hist.filter(function(item, index){
          return res.data.productId.indexOf(item) === index
        })

        for(var i=0; i<uniqueId.length; i++){
          var arr = []

          const count = res.data.productId.filter(id => id == uniqueId[i])

          arr[i] = {id: uniqueId[i], count: count.length}

          this.setState({
            countArr: arr
          })
        }
      })

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
                        {this.state.countArr.map(function(currentItem, i) {
                            return (
                            <div class="row">
                            <div class="card-deck py-3 px-4">
                              <div class="card" key={i}>
                                <div class="card-body">
                                  <h5 class="card-title"><b>{currentItem.id}</b></h5>
                                  <p class="card-text">{currentItem.count}</p>
                                </div>
                                <div class="card-footer">
                                </div>
                            </div>
                          </div>
                        </div>

                          )
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

