
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';


export default class Shop extends Component {
  constructor(props) {
     super(props);

     this.onChangeUsername = this.onChangeUsername.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onChangeDOB = this.onChangeDOB.bind(this);
     this.onChangeEmail = this.onChangeEmail.bind(this);
     this.onChangePhone = this.onChangePhone.bind(this);
     this.onChangeDate = this.onChangeDate.bind(this);
     this.onChangeMonth = this.onChangeMonth.bind(this);
     this.onChangeYear = this.onChangeYear.bind(this);
     this.onChangeUserType = this.onChangeUserType.bind(this);


     this.onSubmit = this.onSubmit.bind(this);

     this.state = {
         username: String,
         password: String,
         dob: String,
         email: String,
         phone: String,
         date: String,
         month: String,
         year: String,
         userType: String
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

  onChangeDate(e) {
    this.setState({
        date: e.target.value
    });
  }

  onChangeMonth(e) {
   this.setState({
       month: e.target.value
   });
  }

  onChangeYear(e) {
   this.setState({
       year: e.target.value
   });
  }

  onChangeUserType(e) {
   this.setState({
       userType: e.target.value
   });
  }

  onSubmit(e) {
        e.preventDefault();
        var date = this.state.date;

        var dob = date + "/" + this.state.month + "/" + this.state.year;
        localStorage.setItem('dob', dob);

        const newUser = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          dob: this.state.dob,
          phone: this.state.phone,
          userType: this.state.userType
      };

        axios.post('http://localhost:4000/users/add', newUser)
            .then(response => {
              localStorage.setItem('username', newUser.username);
              localStorage.setItem('password', newUser.password);
              localStorage.setItem('email', newUser.email);
              localStorage.setItem('phone', newUser.phone);
              localStorage.setItem('userType', newUser.userType);
                window.location = "/";
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
          <div className="App" >
          <br/>
          <div class="jumbotron5 shadow">
          <div class="shadow p-1 mb-5 bg-white rounded-top">
          <h1>Register</h1>
          </div>
            <form onSubmit={this.onSubmit}>
          <div>
          <div class="col p-0" align="center" >
          <div class="col-lg-8 col-lg-offset-8">
          <div width="200px" class="form-group">
            <div class="input-group-prepend border-right">
            </div>
            <input type="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.username} onChange={this.onChangeUsername} required/>
          </div>
          </div>
          <div class="col-lg-8 col-lg-offset-8">
          <div class="form-group sm-3">
            <div class="input-group-prepend border-right">
            </div>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={this.state.password} onChange={this.onChangePassword} required/>
          </div>
          </div>
          <div class="col-lg-8 col-lg-offset-8">
          <div class="form-group sm-3">
            <div class="input-group-prepend border-right">
            </div>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
          </div>
          </div>
          <div class="col-lg-8 col-lg-offset-8">
          <div class="form-group sm-3">
            <div class="input-group-prepend border-right">
            </div>
            <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" value={this.state.phone} onChange={this.onChangePhone}/>
          </div>
          </div>
          <div class="col-lg-8 col-lg-offset-8">
          <div class="form-group sm-3">
                        <div><h5>Birthday:</h5></div>
            <div class="input-group-prepend border-right">
            </div>
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Year (yyyy)" id="year" value={this.state.year} onChange={this.onChangeYear}/>
          </div>
          </div>
            <div class="col-lg-8 col-lg-offset-8">
                <div class="form-group sm-3">
                <div><h5>Account Type?:</h5></div>
          </div>
          </div>
          </div>
          </div>



            <div class="container">
              <div class="row">

                <div class="col">
                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" value={this.state.userType} onChange={this.onChangeUserType} required/>
                    <label class="custom-control-label" for="customControlValidation2">User</label>
                  </div>
                </div>

              <div class="col">
                <div class="custom-control custom-radio mb-3">
                  <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" value={this.state.userType} onChange={this.onChangeUserType} required/>
                  <label class="custom-control-label" for="customControlValidation3">Reatiler</label>
                  <div class="invalid-feedback">Please check a box</div>
                </div>
              </div>

              <div class="col">
                <div class="custom-control custom-radio mb-3">
                  <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" value={this.state.userType} onChange={this.onChangeUserType} required/>
                  <label class="custom-control-label" for="customControlValidation3">Admin</label>
                  <div class="invalid-feedback">Please check a box</div>
                </div>
              </div>

          </div>
          </div>

          <input type="submit" class="btn black-background white b-s mb-4" value="Register"/>
          </form>
        </div>
        </div>

        </Router>
      </div>
    );
  }
}
