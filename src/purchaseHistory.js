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
                    <Menu />
                    <div className="App">
						<h1 class="headingTop">Purchase History</h1>  
                        <div class="card" >
                            <div class="card-body">
                                <h1 class="card-title">Title of Product</h1>
                                <div class="blank">
                                    <img src="https://c7.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg" class="card-img-top" alt="..." />
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Item name</li>
                                        <li class="list-group-item">Item price</li>
                                        <li class="list-group-item">Item description</li>
                                    </ul>
                                    <a href="#" class="btn btn-primary">Item Link</a>
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div class="card" >
                                <div class="card-body">
                                <h1 class="card-title 2">Card title</h1>
                                <div class="blank">
                                    <img src="https://lz12v4f1p8c1cumxnbiqvm10-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/hilarious-stock-photos-for-memes.jpg" class="card-img-top" alt="..." />
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Item name</li>
                                        <li class="list-group-item">Item price</li>
                                        <li class="list-group-item">Item description</li>
                                    </ul>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
