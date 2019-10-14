
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';
import {withRouter} from 'react-router-dom';


export default class AdminEditUser extends Component {
  constructor(props) {
     super(props);
     this.onChangeUsername = this.onChangeUsername.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onChangeDOB = this.onChangeDOB.bind(this);
     this.onChangeEmail = this.onChangeEmail.bind(this);
     this.onChangePhone = this.onChangePhone.bind(this);
     this.onChangeToAdmin = this.onChangeToAdmin.bind(this);
     this.onChangeToRetail = this.onChangeToRetail.bind(this);
     this.onChangeToCustomer = this.onChangeToCustomer.bind(this);
     this.onSubmit = this.onSubmit.bind(this);

     this.state = {
         username: String,
         password: String,
         dob: String,
         email: String,
         phone: String
     }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/' + localStorage.getItem('editUserId'))
        .then(response => {
            this.setState({
                username: response.data.username,
                password: response.data.password,
                dob: response.data.dob,
                email: response.data.email,
                phone: response.data.phone,
                userType: response.data.__v
            })
        })
        .catch(function (error) {
            console.log(error);
        })

    // axios.get('http://localhost:4000/users/') //Calls the webpage that saves all the data
    //   .then(response => {
    //     for(var i = 0; i < response.data.length; i++) { //Going through the data
    //       if(response.data[i].username === localStorage.getItem('username')) {
    //         localStorage.setItem('currentUserId', response.data[i]._id);
    //         console.log(response.data[i]._id);
    //       }
    //                 }
    //               })
    //               .catch(function (error){
    //                   console.log('What happened? ' + error);
    //               })
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

  onChangeToAdmin(e) {
    this.setState({
        userType: 2
    });
   }

   onChangeToRetail(e) {
    this.setState({
        userType: 1
    });
   }

   onChangeToCustomer(e) {
    this.setState({
        userType: 0
    });
   }

  onSubmit(e) {
    e.preventDefault();
    var DOB = this.state.dob;
    var phone = this.state.phone;

    const obj = {
        username: this.state.username,
        password: this.state.password,
        phone: phone,
        dob: DOB,
        email: this.state.email,
        userType: this.state.userType
    };
    console.log(obj);

    axios.post('http://localhost:4000/users/update/' + localStorage.getItem('editUserId'), obj)
      .then(res => console.log(res.data), alert("Your details have been successfully updated"), window.location="/admin-edit-user")
      .catch(function(err) {
        console.log("ERROR: " + err);
      })

    }

  render() {
    return (
      <div class="container">
        <Router>
          <div className="App" >
          <br/>
          <div class="jumbotron">
            <h1>Edit User</h1>
            <a href="/admin-user">Return to Centre</a>
            <form onSubmit={this.onSubmit}>

            <div class="form-group">
              <input type="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={this.state.username} onChange={this.onChangeUsername} required/>
            </div>

            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" value={this.state.password} onChange={this.onChangePassword} required/>
            </div>

            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required/>
            </div>


            <div class="form-group">
              <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" value={this.state.phone} onChange={this.onChangePhone} />
            </div>

            <div class="form-group">
              <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Date of Birth" value={this.state.dob} onChange={this.onChangeDOB} />
            </div>

            <div class="form-group">
              <div class="row">
              <div class="col">
                  <h5>Confirm User Type:</h5>
              </div>

                <div class="col">
                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" value={this.state.userType} onChange={this.onChangeToCustomer} required/>
                    <label class="custom-control-label" for="customControlValidation2">Customer</label>
                  </div>
                </div>

              <div class="col">
                <div class="custom-control custom-radio mb-3">
                  <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" value={this.state.userType} onChange={this.onChangeToRetail} required/>
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
