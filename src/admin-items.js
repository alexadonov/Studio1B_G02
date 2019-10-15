
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
         users: [],
       }

    }

    componentDidMount() {

      // if(localStorage.getItem('userType') != 'admin' || localStorage.getItem('userType') != '0') {
      //   alert("You are not admin and cannot access this page")
      //   window.location = "/";
      // }

      axios.get('http://localhost:4000/items/')
          .then(res => {
            this.setState({
              items: res.data
            })
          })
          .catch(function (error) {
              console.log(error);
          });
          axios.get('http://localhost:4000/users/')
              .then(res => {
                this.setState({
                  users: res.data
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
            <h1>Admin Center: Items</h1>
            <a href="/admin">Return to Centre</a>
            <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm"></div>
              <div class="col-sm">
                <h5><a href="/admin-user">View users</a></h5>
              </div>
              <div class="col-sm">
                <h5><a href="/admin-create-item">Add new item</a></h5>
              </div>
              <div class="col-sm"></div><div class="col-sm"></div>
            </div>

            <table className="table table-striped" style={{ marginTop: 20 }} >
              <thead>
                <tr>
                  <th>Retailer ID</th>
                  <th>Item ID</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            <tbody>
            {this.state.items.map(function(currentItem, i) {

                  return (
                    <tr>
                      <td>{currentItem.retailerId}</td>
                      <td>{currentItem._id}</td>
                        <td>{currentItem.name}</td>
                        <td>{localStorage.setItem('editId', currentItem._id)}<button class="btn btn-link"><a href={"/admin-edit-item"}>Edit</a></button></td>
                        <td><button class="btn btn-link" onClick={function() {
                          localStorage.setItem('deleteId', currentItem._id);
                          axios.delete('http://localhost:4000/items/' + localStorage.getItem('deleteId'))
                            .then(res => alert("Deleted"), window.location = '/');
                        }}>X</button></td>
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
