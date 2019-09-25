
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
                window.location = "/home";
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
              <div class="row">

                <div class="col-sm">
                  <select id="inputState" class="form-control" id="date" value={this.state.date} onChange={this.onChangeDate}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>44</option><option>12</option>
                    <option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option>
                    <option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
                  </select>
                </div>

                <div class="col-sm">
                  <select id="inputState" class="form-control" value={this.state.month} onChange={this.onChangeMonth} id="month">
                    <option selected>January</option><option>February</option><option>March</option><option>April</option><option>May</option><option>June</option>
                    <option>July</option><option>August</option><option>September</option><option>October</option><option>November</option><option>December</option>
                  </select>
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

          <input type="submit" class="btn btn-outline-primary" value="Submit"/>
          </form>
        </div>
        </div>


        </Router>
      </div>
    );
  }
}
