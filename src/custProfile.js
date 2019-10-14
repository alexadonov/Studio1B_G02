import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/styles.css"
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';


export default class Shop extends Component {

  constructor(props) {
       super(props);

       this.state = {
           username: String,
           password: String,
           dob: String,
           email: String,
           phone: String,
           userType: String
        }
    }

    componentDidMount() {
      if(localStorage.getItem('loggedIn') != 'true') {
        alert("You are not logged in and cannot access this page")
        window.location = "/";
      }

      axios.get('http://localhost:4000/users/' + localStorage.getItem('currentUserId'))
          .then(res => {
            this.setState({
              username: res.data.username,
              password: res.data.password,
              dob: res.data.dob,
              email: res.data.email,
              phone: res.data.phone,
              userType: res.data.userType
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
            <br/>
                <div class="jumbotron">
                    <div class="border-bottom p-3 mb-5 bg-white rounded-t">
                        <h1 class="display-4">Customer Profile</h1>
                    </div>

                    <div>
                        <h3>Personal Details</h3>
                    </div>
                    <p>
                        <strong>Name: </strong> {this.state.username}
                    </p>
                    <p>
                        <strong>Date of Birth: </strong> {this.state.dob}
                    </p>
                    <p>
                        <strong>Password: </strong> {this.state.password}
                    </p>

                    <br></br>
                    <br></br>

                    <div>
                        <h3>Contact Details</h3>
                    </div>
                    <p>
                        <strong>Email: </strong> {this.state.email}
                    </p>
                    <p>
                        <strong>Phone: </strong> {this.state.phone}
                    </p>

                    <p>
                        <strong>Account Type: </strong> {this.state.userType}
                    </p>

                    <br></br>
                    <a class="btn black-background white b-s" href="/edit-user" role="button">Edit Profile</a>
                    <br/><br/>
                    <button class="btn black-background white b-s" onClick={function() {
                      axios.delete('http://localhost:4000/users/' + localStorage.getItem('currentUserId'))
                        .then(res => alert("Deleted"));
                    }} role="button">Delete Profile</button>
                </div>
            </div>
        </Router>
    </div>
    );
  }
}
