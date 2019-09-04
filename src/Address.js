
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import "./components/Address.css";

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
          <div className = "NavBar">
            <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="#">Desktop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Laptop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Parts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop">Accessories</a>
            </li>
            </ul>
          </div>

          <div class= "NavIcons">

          <div class= "four-squares-icon">
          <svg width="24px" height="24px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <defs>
                  <path d="M6.66666667,6.66666667 L6.66666667,15 L15,15 L15,6.66666667 L6.66666667,6.66666667 Z M5,3.33333333 L16.6666667,3.33333333 C17.5871412,3.33333333 18.3333333,4.07952542 18.3333333,5 L18.3333333,16.6666667 C18.3333333,17.5871412 17.5871412,18.3333333 16.6666667,18.3333333 L5,18.3333333 C4.07952542,18.3333333 3.33333333,17.5871412 3.33333333,16.6666667 L3.33333333,5 C3.33333333,4.07952542 4.07952542,3.33333333 5,3.33333333 Z M23.3333333,3.33333333 L35,3.33333333 C35.9204746,3.33333333 36.6666667,4.07952542 36.6666667,5 L36.6666667,16.6666667 C36.6666667,17.5871412 35.9204746,18.3333333 35,18.3333333 L23.3333333,18.3333333 C22.4128588,18.3333333 21.6666667,17.5871412 21.6666667,16.6666667 L21.6666667,5 C21.6666667,4.07952542 22.4128588,3.33333333 23.3333333,3.33333333 Z M25,15 L33.3333333,15 L33.3333333,6.66666667 L25,6.66666667 L25,15 Z M23.3333333,21.6666667 L35,21.6666667 C35.9204746,21.6666667 36.6666667,22.4128588 36.6666667,23.3333333 L36.6666667,35 C36.6666667,35.9204746 35.9204746,36.6666667 35,36.6666667 L23.3333333,36.6666667 C22.4128588,36.6666667 21.6666667,35.9204746 21.6666667,35 L21.6666667,23.3333333 C21.6666667,22.4128588 22.4128588,21.6666667 23.3333333,21.6666667 Z M25,33.3333333 L33.3333333,33.3333333 L33.3333333,25 L25,25 L25,33.3333333 Z M5,21.6666667 L16.6666667,21.6666667 C17.5871412,21.6666667 18.3333333,22.4128588 18.3333333,23.3333333 L18.3333333,35 C18.3333333,35.9204746 17.5871412,36.6666667 16.6666667,36.6666667 L5,36.6666667 C4.07952542,36.6666667 3.33333333,35.9204746 3.33333333,35 L3.33333333,23.3333333 C3.33333333,22.4128588 4.07952542,21.6666667 5,21.6666667 Z M6.66666667,33.3333333 L15,33.3333333 L15,25 L6.66666667,25 L6.66666667,33.3333333 Z" id="path-1"></path>
              </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Accesories-Page" transform="translate(-1590.000000, -125.000000)">
                      <g id="Menu_nav" transform="translate(1587.000000, 122.000000)">
                          <g id="grid">
                              <mask id="mask-2" fill="white">
                                  <use href="#path-1"></use>
                              </mask>
                              <use id="Combined-Shape" fill="#000000" fill-rule="nonzero" href="#path-1"></use>
                              <g id="COLOR/-black" mask="url(#mask-2)" fill="#000000" fill-rule="evenodd">
                                  <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          </div>
          <div class= "cart-icon">
          <svg width="24px" height="26px" viewBox="0 0 38 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <defs></defs>
              <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Accesories-Page" transform="translate(-1672.000000, -123.000000)" fill="#929292" fill-rule="nonzero">
                      <g id="Menu_nav" transform="translate(1587.000000, 122.000000)">
                          <g id="Shopping-Cart-Icon" transform="translate(85.000000, 0.000000)">
                              <circle id="Oval-2" cx="11.5" cy="33.5" r="3.5"></circle>
                              <circle id="Oval-2" cx="28.5" cy="33.5" r="3.5"></circle>
                              <rect id="Rectangle-7" transform="translate(11.553942, 22.304646) rotate(-60.000000) translate(-11.553942, -22.304646) " x="5.73695462" y="20.4046461" width="11.6339746" height="3.8" rx="1.9"></rect>
                              <rect id="Rectangle-7" transform="translate(9.784402, 11.040454) rotate(-116.000000) translate(-9.784402, -11.040454) " x="-0.554751984" y="9.14045401" width="20.6783084" height="3.8" rx="1.9"></rect>
                              <rect id="Rectangle-7" x="0" y="1" width="7.76441621" height="3.8" rx="1.9"></rect>
                              <rect id="Rectangle-7" x="8" y="24" width="24.0376599" height="3.8" rx="1.9"></rect>
                              <rect id="Rectangle-7" x="12" y="17" width="18" height="3.8" rx="1.9"></rect>
                              <rect id="Rectangle-7" x="7" y="5" width="30" height="3.8" rx="1.9"></rect>
                              <rect id="Rectangle-7" transform="translate(32.037660, 12.606284) rotate(-59.000000) translate(-32.037660, -12.606284) " x="23.4770462" y="10.7062837" width="17.1212275" height="3.8" rx="1.9"></rect>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          </div>

          <div class= "person-icon">
          <svg width="24px" height="26px" viewBox="0 0 28 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <defs>
                  <path d="M203,32.8888889 C203,33.7479985 202.303554,34.4444444 201.444444,34.4444444 C200.585335,34.4444444 199.888889,33.7479985 199.888889,32.8888889 L199.888889,29.7777778 C199.888889,27.2004489 197.799551,25.1111111 195.222222,25.1111111 L182.777778,25.1111111 C180.200449,25.1111111 178.111111,27.2004489 178.111111,29.7777778 L178.111111,32.8888889 C178.111111,33.7479985 177.414665,34.4444444 176.555556,34.4444444 C175.696446,34.4444444 175,33.7479985 175,32.8888889 L175,29.7777778 C175,25.4822297 178.48223,22 182.777778,22 L195.222222,22 C199.51777,22 203,25.4822297 203,29.7777778 L203,32.8888889 Z M189,18.8888889 C184.704452,18.8888889 181.222222,15.4066592 181.222222,11.1111111 C181.222222,6.81556306 184.704452,3.33333333 189,3.33333333 C193.295548,3.33333333 196.777778,6.81556306 196.777778,11.1111111 C196.777778,15.4066592 193.295548,18.8888889 189,18.8888889 Z M189,15.7777778 C191.577329,15.7777778 193.666667,13.6884399 193.666667,11.1111111 C193.666667,8.53378228 191.577329,6.44444444 189,6.44444444 C186.422671,6.44444444 184.333333,8.53378228 184.333333,11.1111111 C184.333333,13.6884399 186.422671,15.7777778 189,15.7777778 Z" id="path-2"></path>
              </defs>
              <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Accesories-Page" transform="translate(-1762.000000, -125.000000)">
                      <g id="Menu_nav" transform="translate(1587.000000, 122.000000)">
                          <mask id="mask-2" fill="white">
                              <use href="#path-2"></use>
                          </mask>
                          <use id="Combined-Shape" fill="#929292" fill-rule="nonzero" href="#path-2"></use>
                      </g>
                  </g>
              </g>
          </svg>
          </div>
        </div>

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
