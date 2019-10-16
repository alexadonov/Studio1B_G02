import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import axios from 'axios';
import { Link, BrowserRouter as Router } from "react-router-dom";


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
          <br/>
          <div class="shadow p-1 mb-5 bg-white rounded-top">
            <h1>Admin: Purchase History</h1>
            <a href="/admin">Return to Centre</a>


            <table className="table table-striped" style={{ marginTop: 20 }} >
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
                <td>${currentItem.price}</td>
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
        </Router>
      </div>
    );
  }
}
