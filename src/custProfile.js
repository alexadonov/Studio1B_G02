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
      document.getElementById("removeBtn").style.display = "none";
      document.getElementById("saveBtn").style.display = "none";

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

          if(localStorage.getItem('loggedIn') === 0) {
            alert('You are not logged in. Please log in to view your details.');
            window.location = "/sign-in";
          }

    }

    viewPassword() {

      var pass = localStorage.getItem('password');
      var password = prompt("Please enter your password");
      if(password === pass) {
        document.getElementById("showBtn").style.display = "none";
        document.getElementById('pass').innerHTML = pass;
        document.getElementById("removeBtn").style.display = "inline";
      } else {
        alert("Sorry, wrong password");
      }
    }

    hidePassword() {

      document.getElementById("showBtn").style.display = "inline";
      document.getElementById('pass').innerHTML = "********";
      document.getElementById("removeBtn").style.display = "none";
    }

    editName() {
      var name = localStorage.getItem('name');
      var pass = localStorage.getItem('password');

      var password = prompt("Please enter your password");
      if(password === pass) {
        var newName = prompt("Please enter your new name");
        localStorage.setItem('name', newName);
      } else {
        alert("Sorry, wrong password");
      }
    }

    editEmail() {
      document.getElementById('emailInput').disabled = false;
      document.getElementById("showEmailBtn").style.display = "none";
      document.getElementById("saveBtn").style.display = "inline";
    }

    saveBtn() {
      //Update database here
      document.getElementById('emailInput').disabled = true;
      document.getElementById("showEmailBtn").style.display = "inline";
      document.getElementById("saveBtn").style.display = "none";
      var id = this.props.match.params.id;
      axios.post('http://localhost:4000/items/update/' + id, this.state.email)
        .then(res => console.log(res.data));
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
                    <div class="container">
                      <div class="row">
                        <div class="col-sm">
                          <h3>Name: </h3>
                        </div>
                        <div class="col-sm">
                          <h5>{localStorage.getItem('username')}</h5>
                        </div>
                        <div class="col-sm">
                          <button onClick={this.viewPassword} id="editName" class="btn btn-outline-primary">Edit Name</button>
                        </div>
                    </div></div>
                    </div>
                    <div>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm">
                          <h3>Date of Birth: </h3>
                        </div>
                        <div class="col-sm">
                          <h5>{localStorage.getItem('dob')}</h5>
                        </div>
                        <div class="col-sm">
                        <button onClick={this.viewPassword} id="editDOB" class="btn btn-outline-primary">Edit Date of Birth</button>
                        </div>
                    </div></div>
                    </div>
                    <div>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm">
                          <h3>Password: </h3>
                        </div>
                        <div class="col-sm">
                          <h5 id="pass">********</h5>
                        </div>
                        <div class="col-sm">
                          <button onClick={this.viewPassword} id="showBtn" class="btn btn-outline-primary">View Password</button>
                          <button onClick={this.hidePassword} id="removeBtn" class="btn btn-outline-primary">Hide Password</button>
                          <button onClick={this.editPassword} id="showBtn" class="btn btn-outline-primary">Edit Password</button>

                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-sm">
                          <h3>User Type </h3>
                        </div>
                        <div class="col-sm">
                          <h5>{localStorage.getItem('userType')}</h5>
                        </div>
                        <div class="col-sm"></div>
                    </div></div>
                    <br></br>
                    <br></br>

                    <div>
                        <h2>Contact Details</h2>
                    </div>

                    <div>
                      <div class="container">
                        <div class="row">
                          <div class="col-sm">
                            <h3>Email: </h3>
                          </div>
                          <div class="col-sm">
                            <input type="text" placeholder={localStorage.getItem('email')} class="form-control" id="emailInput" disabled></input>
                          </div>
                          <div class="col-sm">
                          <button onClick={this.editEmail} id="showEmailBtn" class="btn btn-outline-primary">Edit Email</button>
                          <button onClick={this.saveBtn} id="saveBtn" class="btn btn-outline-primary">Save Email</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="container">
                        <div class="row">
                          <div class="col-sm">
                            <h3>Phone: </h3>
                          </div>
                          <div class="col-sm">
                            <h5>{localStorage.getItem('phone')}</h5>
                          </div>
                          <div class="col-sm">
                          <button onClick={this.editPhone} id="showBtn" class="btn btn-outline-primary">Edit Phone Number</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br/><br/>
                    <a class="btn btn-primary btn-lg" href="/edit-user" role="button">Edit Profile</a>
                </div>
            </div>
        </Router>
    </div>
    );
  }
}
