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
                    <div className="App">
                    <div class="jumbotron">
						              <h1 class="headingTop">Purchase History</h1>
                          <div class="card-deck i">
                          <div class="row">
                        <div class="card col p-0" >
                            <div class="card-body p-0">
                                <h1 class="card-title card-header">Card Title</h1>
                                <div class="blank">
                                    <img src="https://c7.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg" class="card-img-top" alt="..." />
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Item name</li>
                                        <li class="list-group-item">Item price</li>
                                        <li class="list-group-item">Item description</li>
                                    </ul>
                                    <div class="card-footer">
                                      <a class="btn btn-primary">Item Link</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div class="card col p-0" >
                                <div class="card-body p-0">
                                <h1 class="card-title card-header">Card title</h1>
                                <div class="blank">
                                    <img src="https://lz12v4f1p8c1cumxnbiqvm10-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/hilarious-stock-photos-for-memes.jpg" class="card-img-top" alt="..." />
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Item name</li>
                                        <li class="list-group-item">Item price</li>
                                        <li class="list-group-item">Item description</li>
                                    </ul>
                                    <div class="card-footer">
                                      <a class="btn btn-primary">Go Somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </Router>
            </div>
        );
    }
}
