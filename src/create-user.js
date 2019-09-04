
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';
import Home from "./home.js";
import {withRouter} from 'react-router-dom';


export default class Shop extends Component {
  constructor(props) {
     super(props);

     this.onChangeUsername = this.onChangeUsername.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onChangeDOB = this.onChangeDOB.bind(this);
     this.onChangeEmail = this.onChangeEmail.bind(this);
     this.onChangePhone = this.onChangePhone.bind(this);
     this.onSubmit = this.onSubmit.bind(this);

     this.state = {
         username: String,
         password: String,
         dob: String,
         email: String,
         phone: String
     }
  }

  onChangeUsername(e) {
    this.setState({
        username: e.target.value
    });
  }

  onChangePassword(e) {
   this.setState({
       password: e.target.value
   });
  }

  onChangeDOB(e) {
    this.setState({
        dob: e.target.value
    });
  }

  onChangeEmail(e) {
   this.setState({
       email: e.target.value
   });
  }

  onChangePhone(e) {
   this.setState({
       phone: e.target.value
   });
  }

  onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`username: ${this.state.username}`);
        console.log(`Password : ${this.state.password}`);

        const newUser = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          dob: this.state.dob,
          phone: this.state.phone,
      };

        axios.post('http://localhost:4000/users/add')
            .then(response => {
                alert("Welcome to the club!");
            })
            .catch(function (error){
                console.log('What happened? ' + error);
            })

          this.setState({
            username: '',
            password : '',
            email: '',
            dob: '',
            phone: ''
          });
    }

  render() {
    return (
      <div class="container">
        <Router>
          <Menu/>
          <div className="App" >
          <br/>
          <div class="jumbotron">
            <h1>Create User</h1>
            <form onSubmit={this.onSubmit}>

            <div class="form-group">
              <input type="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.username} onChange={this.onChangeUsername} required/>
            </div>

            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={this.state.password} onChange={this.onChangePassword} required/>
            </div>

            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
            </div>


            <div class="form-group">
              <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" value={this.state.phone} onChange={this.onChangePhone}/>
            </div>

            <div class="form-group">
              <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Date of Birth" value={this.state.dob} onChange={this.onChangeDOB}/>
            </div>

          <input type="submit" class="btn btn-outline-primary" value="Submit"/>
          </form>
        </div>
        </div>



        </Router>
      </div>
    );
  }
}
