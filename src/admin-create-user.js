
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';


export default class AdminCreateUser extends Component {
  constructor(props) {
     super(props);

     this.onChangeUsername = this.onChangeUsername.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onChangeDOB = this.onChangeDOB.bind(this);
     this.onChangeDate = this.onChangeDate.bind(this);
     this.onChangeMonth = this.onChangeMonth.bind(this);
     this.onChangeYear = this.onChangeYear.bind(this);
     this.onChangeEmail = this.onChangeEmail.bind(this);
     this.onChangePhone = this.onChangePhone.bind(this);
     this.onChangeToCustomer = this.onChangeToCustomer.bind(this);
     this.onChangeToRetailer = this.onChangeToRetailer.bind(this);
     this.onChangeToAdmin = this.onChangeToAdmin.bind(this);


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

  onChangeToCustomer(e) {
   this.setState({
       userType: 'Customer'
   });
  }

  onChangeToRetailer(e) {
    this.setState({
        userType: 'Retailer'
    });
   }

   onChangeToAdmin(e) {
    this.setState({
        userType: 'Admin'
    });
   }

  onSubmit(e) {
        e.preventDefault();

        var DOB = this.state.date + "/" + this.state.month + "/" + this.state.year;
        localStorage.setItem('dob', DOB);

        const newUser = {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          dob: DOB,
          phone: this.state.phone,
          userType: this.state.userType
      };

        axios.post('http://localhost:4000/users/add', newUser)
            .then(response => {
              localStorage.setItem('username', newUser.username);
              localStorage.setItem('password', newUser.password);
              localStorage.setItem('email', newUser.email);
              localStorage.setItem('phone', newUser.phone);
              localStorage.setItem('dob', newUser.dob);
              localStorage.setItem('userType', newUser.userType);
                window.location = "/admin-user";
            })
            .catch(function (error){
                console.log('What happened? ' + error);
            })

            axios.get('http://localhost:4000/users/') //Calls the webpage that saves all the data
            .then(response => {
              for(var i = 0; i < response.data.length; i++) { //Going through the data
                if((response.data[i].username === localStorage.getItem('username')) && (response.dara[i].password === localStorage.getItem('password'))) {
                  localStorage.setItem('newUserId', response.data[i]._id);
                  console.log(response.data[i]._id);
                }
                          }
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
          <div class="jumbotron">
            <h1>Create User</h1>
            <a href="/admin-user">Return to Users</a>
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
              <div class="row">

                <div class="col-sm">
                  <input type="username" class="form-control" aria-label="Date" placeholder="Date (dd)" value={this.state.date} onChange={this.onChangeDate}/>
                </div>

                <div class="col-sm">
                  <input id="inputState" class="form-control" placeholder="Month (mm)" value={this.state.month} onChange={this.onChangeMonth} id="month"/>
                </div>

                <div class="col-sm">
                  <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Year (yyyy)" id="year" value={this.state.year} onChange={this.onChangeYear}/>
                </div>

                </div>
            </div>

            <div class="container">
              <div class="row">
              <div class="col">
                  <h5>Who are you?</h5>
              </div>

                <div class="col">
                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" value={this.state.userType} onChange={this.onChangeToCustomer} required/>
                    <label class="custom-control-label" for="customControlValidation2">Customer</label>
                  </div>
                </div>

              <div class="col">
                <div class="custom-control custom-radio mb-3">
                  <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" value={this.state.userType} onChange={this.onChangeToRetailer} required/>
                  <label class="custom-control-label" for="customControlValidation3">Reatiler</label>
                  <div class="invalid-feedback">Please check a box</div>
                </div>
              </div>

              <div class="col">
                <div class="custom-control custom-radio mb-3">
                  <input type="radio" class="custom-control-input" id="customControlValidation4" name="radio-stacked" value={this.state.userType} onChange={this.onChangeToAdmin} required/>
                  <label class="custom-control-label" for="customControlValidation4">Admin</label>
                  <div class="invalid-feedback">Please check a box</div>
                </div>
              </div>

          </div>
          </div>
          <input type="submit" class="btn black-background white b-s" value="Submit"/>
          </form>
        </div>
        </div>


        </Router>
      </div>
    );
  }
}
