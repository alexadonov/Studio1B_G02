import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/styles.css"
import { BrowserRouter as Router } from "react-router-dom";


export default class EditRetailerProfile extends Component {

    /*name="John Smith"
    birth = 19 / 10 / 1999
    password = "wheresthelambSAUCE"
    email = "johnSmith@gmail.com"
    phone = "041234567"

    changeName() { }

    changeBirth() { }

    changePassword() { }

    changeEmail() { }

    changePhone() { }*/

    render() {
        return (
            <div class="container">
                <Router>
                    <Menu />
                    <div className="App">
                        <div class="jumbotron">
                            <div class="shadow p-3 mb-5 bg-white rounded">
                                <h1 class="display-4">Customer Profile</h1>
                            </div>

                            <div>
                                <h2>Personal Details</h2>
                            </div>

                            <form>
                                <div class="form-group row">
                                    <h3> Name:</h3>
                                </div>

                                <div class="form-group row">
                                    <h3 for="formGroup">Edit Name: </h3>
                                    <div class="editNameRow">
                                        <input type="text" class="form-control" id="editName" placeholder="Enter new name" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <h3> Date of Birth: </h3>
                                </div>

                                <div class="form-group row">
                                    <h3> Password: </h3>
                                </div>

                                <div class="form-group row">
                                    <h3 for="formGroup">Edit Password: </h3>
                                    <div class="editPasswordRow">
                                        <input type="text" class="form-control" id="editPassword" placeholder="Enter new password" />
                                    </div>
                                </div>
                            </form>

                            <br></br>
                            <br></br>


                            <div>
                                <h2>Contact Details</h2>
                            </div>

                            <form>
                                <div class="form-group row">
                                    <h3 for="formGroup">Edit Email: </h3>
                                    <div class="editEmailRow">
                                        <input type="text" class="form-control" id="editEmail" placeholder="Enter new Email" />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <h3 for="formGroup">Edit Phone: </h3>
                                    <div class="editPhoneRow">
                                        <input type="text" class="form-control" id="editPhone" placeholder="Enter new phone number" />
                                    </div>
                                </div>
                            </form>
                            <a class="btn btn-primary btn-lg" href="/" role="button">Confirm Edit</a>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
