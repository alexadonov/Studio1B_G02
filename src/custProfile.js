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
           userType: String,
        }
    }

   /* getUser = () => {
        this.setState({
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password'),
            dob: localStorage.getItem('dob'),
            email: localStorage.getItem('email'),
            userType: localStorage.getItem('userType')

        })
    */

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
    <div class="content rounded">
        <Router>
            <div className="App">
 
                <div class="jumbotron1 shadow rounded">
                    <div class="border-bottom bg-white rounded-t">
                        <h1 class="">Customer Profile</h1>
                                 <a href="/" role="button" class="btn btn-default btn-sm "><b>Home</b></a>
        <button class="btn btn-default btn-sm mr-3" onClick={function(){
                            localStorage.setItem('currentUserId', null)
                            localStorage.setItem('loggedIn', false)
                            window.location='/'
                        }}><b>Logout</b></button>
                    </div>

                    <div class="ml-3 mt-3">
                    <div class="row">
                    <div class="text-right col">
                    <div>
                        <h3 ><b>Personal Details</b></h3>
                    </div>
                    <div class="ml-4">
                    <p>
                        <strong>Name: </strong> {this.state.username}
                    </p>
                    <p>
                        <strong>Date of Birth: </strong> {this.state.dob}
                    </p>
                    <p>
                        <strong>Password: </strong> {this.state.password}
                    </p>
                    </div>
                    </div>
                    <div class="text-left col">
                    <div>
                        <h3><b>Contact Details</b></h3>
                    </div>
                    <div class="ml-4">
                    <p>
                        <strong>Email: </strong> {this.state.email}
                    </p>
                    <p>
                        <strong>Phone: </strong> {this.state.phone}
                    </p>

                    <p>
                        <strong>Account Type: </strong> {this.state.userType}
                    </p>
                    </div>
</div>
</div>
                    <div class="row pt-3 border-top">
                        <div className="col"></div>
                        <div class="col-3">
                            <a className="btn black-background white b-s" href="/edit-user" role="button">Edit Profile</a>
                        </div>
                        <div className="col-3">
                            <button class="btn black-background white b-s" onClick={function() {
                                axios.delete('http://localhost:4000/users/' + localStorage.getItem('currentUserId'))
                                    .then(res => alert("Deleted"));
                                }} role="button">Delete Profile
                            </button>
                        </div>
                        <div className="col-3">
                            <a className="btn black-background white b-s" href="/purchaseHistory" role="button">Purchase History</a>
                        </div>
                        <div className="col"></div>
                    </div>

                    <br/>
                    <div class="row">
                        <div className="col"></div>
                        
                        <div className="col">
                        {this.state.userType === 'Retailer' &&<a className="btn black-background white b-s" href="/retailerProducts" role="button">View My Products</a>}
                        </div>
                        <div className="col">
                            {this.state.userType === 'Admin' || 'admin'&& <a className="btn black-background white b-s" href="/admin" role="button">Admin Centre</a>}
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
