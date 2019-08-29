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
                    <div class="shadow p-3 mb-5 bg-white rounded">
                        <h1 class="display-4">Customer Profile</h1>
                    </div>

                    <div>
                        <h2>Personal Details</h2>
                    </div>
                    <div>
                        <h3>Name: </h3>
                    </div>
                    <div>
                        <h3>Date of Birth: </h3>
                    </div>
                    <div>
                        <h3>Password: </h3>
                    </div>

                    <br></br>
                    <br></br>

                    <div>
                        <h2>Contact Details</h2>
                    </div>
                    <div>
                        <h3>Email: </h3>
                    </div>
                    <div>
                        <h3>Phone: </h3>
                    </div>

                    <a class="btn btn-primary btn-lg" href="/" role="button">Edit Profile</a>
                </div>
            </div>
        </Router>
    </div>
    );
  }
}
