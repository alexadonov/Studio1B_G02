
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import "./static/Address.css";

export default class Address extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <Menu/>
        </Router>
        <div class="jumbotron">

        <header>

          <h1 class="display-1">Sign up</h1>
          

        </header>
        <section>
            <form class="needs-validation" novalidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationCustom01">First name</label>
                  <input type="text" pattern="[a-zA-Z\s]*" class="form-control" id="validationCustom01" placeholder="First name" required/>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationCustom02">Last name</label>
                  <input type="text" pattern="[a-zA-Z\s]*" class="form-control" id="validationCustom02" placeholder="Last name" required/>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustom03">Shipping Address 1</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder="Shipping Address 1" required/>
                    <div class="valid-feedback">
                      Looks good!
                    </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationCustom04">City</label>
                  <input type="text" class="form-control" id="validationCustom04" placeholder="City/Town" required/>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                <label for="validationCustom05">State</label>
                <select class="custom-select" id="validationCustom05" placeholder="State" required>
                  <option value="">Select</option>
                  <option value="">New South Wales</option>
                  <option value="">Queensland</option>
                  <option value="">South Australia</option>
                  <option value="">Victoria</option>
                  <option value="">Western Australia</option>
                </select>
                <div class="invalid-feedback">
                  Looks good!
                </div>
              </div>

                <div class="col-md-3 mb-3">
                  <label for="validationCustom06">Zip</label>
                  <input type="text" pattern="[0-9]{4}" class="form-control" id="validationCustom06"  placeholder="Zip" title="Australian zip codes only contain 4 digits"required/>
                  <div class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit Shipping details</button>
              </form>

        </section>

        </div>
        </div>
    );
  }
}
