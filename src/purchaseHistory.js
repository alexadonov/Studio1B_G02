import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/styles.css"
import { BrowserRouter as Router } from "react-router-dom";


export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {text: '', inputText: '', mode:'customer'};

        this.handleChange = this.handleChange.bind(this);
        this.handleCustomer = this.handleCustomer.bind(this);
        this.handleRetailer = this.handleRetailer.bind(this);


    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    handleCustomer() {
        this.setState({text: this.state.inputText, mode: 'customer'});
    }

    handleRetailer() {
        this.setState({mode: 'retailer'});
    }

    render() {
        if (this.state.mode == 'customer') {
            return (
                <div class="container">
                    <Router>
                        <div className="App">
                            <div class="jumbotron">
                                <h1 class="headingTop">Purchase History Customer View</h1>
                                <div class="card-deck i">
                                    <div class="row">
                                        <div class="card col p-0">
                                            <div class="card-body p-0">
                                                <h1 class="card-title card-header">Card Title</h1>
                                                <div class="blank">
                                                    <img
                                                        src="https://c7.alamy.com/comp/EPF1YW/nun-with-handgun-isolated-on-white-EPF1YW.jpg"
                                                        class="card-img-top" alt="..."/>
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
                                        <a className="btn btn-primary" role="button" onClick = {this.handleRetailer}>Change State</a>
                                        <div class="card col p-0">
                                            <div class="card-body p-0">
                                                <h1 class="card-title card-header">Card title</h1>
                                                <div class="blank">
                                                    <img
                                                        src="https://lz12v4f1p8c1cumxnbiqvm10-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/hilarious-stock-photos-for-memes.jpg"
                                                        class="card-img-top" alt="..."/>
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
        else{
            return (
                <div class="container">
                    <Router>
                        <div className="App">
                            <div class="jumbotron">
                                <h1 class="headingTop">Purchase History Retailer View</h1>
                                <div class="card-deck i">
                                    <div class="row">
                                        <div class="card col p-0">
                                            <div class="card-body p-0">
                                                <h1 class="card-title card-header">Card Title</h1>
                                                <div class="blank">
                                                    <img
                                                        src="https://i.kym-cdn.com/photos/images/original/001/316/888/f81.jpeg"
                                                        class="card-img-top" alt="..."/>
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
                                        <a className="btn btn-primary" role="button" onClick = {this.handleCustomer}>Change State</a>
                                        <div class="card col p-0">
                                            <div class="card-body p-0">
                                                <h1 class="card-title card-header">Card title</h1>
                                                <div class="blank">
                                                    <img
                                                        src="https://qph.fs.quoracdn.net/main-qimg-c10a5cfe8ec1cc8f81b79cb4e14b63bd"
                                                        class="card-img-top" alt="..."/>
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
}
