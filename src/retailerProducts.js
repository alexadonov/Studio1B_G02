
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';
import "./static/shop.css";
import CurrencyFormat from 'react-currency-format';


export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = { items: []
            // name: String,
            // price: String,
            // description: String,
            // brand: String,
            // model: String,
            // inStock: Boolean,
            // image: String
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
                <head><link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/></head>
                <div className="App">
                    <Router>
                    </Router>
                    <div class="jumbotron1">
                        <Menu/>
                        <div class="row">
                            <div class="mainContent pb-4">
                                <section class="pt-0 pb-5">
                                    <div class="row pb-5">
                                        <div class="card-deck pb-3 px-4">
                                            {this.state.items.map(function(currentItem, i) {
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
                                                                    <button class="list-group-item list-group-item-action" onClick={localStorage.setItem('name', currentItem)}>Edit Product</button>
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
                            <div class = "sideBar col-3 px-3 py-3">
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
