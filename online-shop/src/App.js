import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./dog.jpg";

function App() {
  return (
    <div className="App">
      <Router>
               <nav className="navbar navbar-dark bg-dark">
                 <Link to="/" className="navbar-brand">Online Shop</Link>
                 <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            </a>

            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
               </nav>

               <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src={logo} class="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
           </Router>
    </div>
  );
}

export default App;
