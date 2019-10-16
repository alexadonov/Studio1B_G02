
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

      axios.get('http://localhost:4000/users/')
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
      <div class="container">
          <Router>
          <div className="App">
          <div class="shadow bg-white rounded-top jumbotron1">
            <h1>Admin Center: Users</h1>
            <a href="/admin">Return to Centre</a>
            <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm"></div>
              <div class="col-sm">
                <h5><a href="/admin-item">View Items</a></h5>
              </div>
              <div class="col-sm">
                <h5><a href="/admin-create-user">Add new User</a></h5>
              </div>
              <div class="col-sm">
                <h5><a href="/admin-history">Sales History</a></h5>
              </div>
              <div class="col-sm"></div><div class="col-sm"></div>
            </div>
            <div class="container overflow-scroll">
            <table class="table table-striped overflow-scroll">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>User Type</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            <tbody>
            {this.state.items.map(function(currentItem, i) {
              return(
              <tr>
                <td>{currentItem._id}</td>
                <td>{currentItem.username}</td>
                <td>{currentItem.userType}</td>
                <td><button class="btn btn-link" onClick={function() {
                  localStorage.setItem('editId', currentItem._id);
                  }}><a href={"/admin-edit-user"}>Edit</a></button>
                </td>
                <td><button class="btn btn-link" onClick={function() {
                  localStorage.setItem('deleteId', currentItem._id);
                  axios.delete('http://localhost:4000/users/' + localStorage.getItem('deleteId'))
                    .then(res => alert("Deleted"));
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
