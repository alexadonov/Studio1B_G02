import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./components/styles.css"
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';


export default class Shop extends Component {

  constructor(props) {
       super(props);

       this.state = {
           username: String,
           password: String
        }
    }

    componentDidMount() {
      axios.get('http://localhost:4000/items/')
          .then(res => {
            this.setState({
              username: res.data.username,
              password: res.data.password
            })
          })
          .catch(function (error) {
              console.log(error);
          });
    }


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
                        <h5>{localStorage.getItem('username')}</h5>
                    </div>
                    <div>
                        <h3>Date of Birth: </h3>
                    </div>
                    <div>
                        <h3>Password: </h3>
                        <h5>{localStorage.getItem('password')}</h5>
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

                    <a class="btn btn-primary btn-lg" href="/edit-user" role="button">Edit Profile</a>
                </div>
            </div>
        </Router>
    </div>
    );
  }
}
