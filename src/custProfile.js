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
                        <h3>Personal Details</h3>
                    </div>
                    <p>
                        <strong>Name: </strong> {localStorage.getItem('username')}
                    </p>
                    <p>
                        <strong>Date of Birth: </strong> {localStorage.getItem('dob')}
                    </p>
                    <p>
                        <strong>Password: </strong> {localStorage.getItem('password')}
                    </p>

                    <br></br>
                    <br></br>

                    <div>
                        <h3>Contact Details</h3>
                    </div>
                    <p>
                        <strong>Email: </strong> {localStorage.getItem('email')}
                    </p>
                    <p>
                        <strong>Phone: </strong> {localStorage.getItem('phone')}
                    </p>

                    <br></br>
                    <a class="btn btn-primary btn-lg" href="/edit-user" role="button">Edit Profile</a>
                </div>
            </div>
        </Router>
    </div>
    );
  }
}
