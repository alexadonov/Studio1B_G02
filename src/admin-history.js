import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import axios from 'axios';
import { Link, BrowserRouter as Router } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';


export default class Admin extends Component {

  constructor(props) {
       super(props);

       this.state = {
         items: [],
       }
    }

    componentDidMount() {

      // if(localStorage.getItem('userType') != 'admin' || localStorage.getItem('userType') != '0') {
      //   alert("You are not admin and cannot access this page")
      //   window.location = "/";
      // }

      axios.get('http://localhost:4000/history/')
          .then(res => {
            this.setState({
              items: res.data
            })
          })
          .catch(function (error) {
              console.log(error);
          });

    }

  render() {

    return (
      <div class="container" >
          <Router>
          <div className="App">
          <div class="shadow p-1 jumbotron1 mt-2 mb-1 bg-white rounded-top">
            <h1>Admin: Purchase History</h1>
            <a href="/admin">Return to Centre</a>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-bordered table-striped mb-0">
              <thead>
                <tr>
                  <th>Retailer ID</th>
                  <th>Customer Id</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
            <tbody>
            {this.state.items.map(function(currentItem, i) {
              return(
              <tr>
                <td>{currentItem.retailerId}</td>
                <td>{currentItem.customerId}</td>
                <td>{currentItem.name}</td>
                <td><CurrencyFormat value={currentItem.price} displayType="text" thousandSeparator={true} prefix="$" />.00</td>
                <td><button class="btn btn-link" onClick={function() {
                  localStorage.setItem('deleteId', currentItem._id);
                  axios.delete('http://localhost:4000/history/' + localStorage.getItem('deleteId'))
                    .then(res => window.location="/admin-history");
                  }}>X</button>
                </td>
              </tr>
              )
              })
            }
            </tbody>
            </table>
</div>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}
