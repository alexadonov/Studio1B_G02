import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/shop.css"
import { BrowserRouter as Router } from "react-router-dom";

var name = "John Smith";


function changeNameTest() {
    name = "not John"
}

export default class Shop extends Component {

    //name="John Smith"
    birth = 19 / 10 / 1999
    password = "wheresthelambSAUCE"
    email = "johnSmith@gmail.com"
    phone = "041234567"

    changeDetails(editName, editBirth, editPassword, editEmail, editPhone) {

    }

    changeNameTest(){
        //document.getElementById('editName').innerHTML = "lmao";
        //this.name = "not John"
    }

    changeBirth(editBirth) {

    }

    changePassword(editPassword) {

    }

    changeEmail(editEmail) {

    }

    changePhone(editPhone) {

    }


    componentDidMount() {

      if(localStorage.getItem('loggedIn') != 'true') {
        alert("You are not logged in and cannot access this page")
        window.location = "/";
      }
    }

    render() {
        return (
            <div class="container">
                <Router>
                    <div className="App">
                        <div class="jumbotron">
                            <div class="shadow p-3 mb-5 bg-white ro-unded">
                                <h1 class="display-4">Edit Customer Profile</h1>
                            </div>

                            <form>
                                <div class="form-group">
                                    <div class = "col">
                                        <h2>Personal Details</h2>
                                    </div>

                                    <div class = "form-group row">
                                        <h2 for="formGroup" class = "col-sm-2">Name: </h2>
                                        <div class="col">
                                            <input type="text" class="form-control" id="editName" value={name} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <h2 for = "formGroup" class = "col-sm-2" >Date of Birth: </h2>
                                        <div class = "col">
                                            <input type ="text" class="form-control" id = "editBirth" value="01/01/2019" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <h2 for="formGroup" class = "col-sm-2">Password: </h2>
                                        <div class="col">
                                            <input type="text" class="form-control" id="editPassword" placeholder="Enter new password" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <br></br>
                            <br></br>

                            <form>
                                <div className="col">
                                    <h2>Contact Details</h2>
                                </div>
                                <div class="form-group row">
                                    <h2 for="formGroup" class = "col-sm-2">Email: </h2>
                                    <div class="col">
                                        <input type="text" class="form-control" id="editEmail" value={this.email} />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <h2 for="formGroup" class = "col-sm-2">Phone: </h2>
                                    <div class="col">
                                        <input type="text" class="form-control" id="editPhone" value={this.phone} />
                                    </div>
                                </div>
                            </form>
                            <a class="btn btn-primary btn-lg" role="button" onClick="changeDetails();">Confirm Edit</a>
                            <a class="button btn-primary btn-lg" role="button" onClick={changeNameTest()}>Confirm Edita</a>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
