
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import axios from 'axios';
import { Link, BrowserRouter as Router } from "react-router-dom";


export default class Admin extends Component {

  constructor(props) {
       super(props);
       this.onChangeCurrentID = this.onChangeCurrentID.bind(this);

       this.state = {
         items: [],
         curId: String
       }
       this.deleteUser = this.deleteUser.bind(this);
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

    deleteUser(e) {
      e.preventDefault();
      const newId = {
        curId: this.state.curId
      }

      axios.delete('http://localhost:4000/users/' + newId.curId)
        .then(res => alert("Deleted - Please Refresh Your Page"))
    }

    onChangeCurrentID(e) {
      this.setState({
          curId: e.target.value
      });
     }

  render() {
    var btn = <td><button class="btn btn-link" onClick={this.deleteUser}>X</button></td>

    return (
      <div class="container" >
          <Router>
          <div className="App">
          <Menu/>
          <br/>
          <div class="shadow p-1 mb-5 bg-white rounded-top">
            <h1>Admin Center: Users</h1>

            <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm"></div>
              <div class="col-sm">
                <h5><a href="/admin-item">View Items</a></h5>
              </div>
              <div class="col-sm">
                <h5><a href="/create-user">Add new User</a></h5>
              </div>
              <div class="col-sm"></div><div class="col-sm"></div>
            </div>

            <table className="table table-striped" style={{ marginTop: 20 }} >
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
                if(currentItem.__v == 0) {
                  return (
                    <tr>
                      <td>{currentItem._id}</td>
                      <td>{currentItem.username}</td>
                      <td>Admin</td>
                      <td>{localStorage.setItem('id', currentItem._id)}<button class="btn btn-link"><a href={"/edit-user"}>Edit</a></button></td>
                      {btn}{localStorage.setItem('id', currentItem._id)}
                    </tr>
                  )
                }
                if(currentItem.__v == 1) {
                  return (
                    <tr>
                      <td>{currentItem._id}</td>
                      <td>{currentItem.username }</td>
                      <td>Retailer</td>
                      <td>{localStorage.setItem('id', currentItem._id)}<button class="btn btn-link"><a href={"/edit-user"} onClick={localStorage.setItem('id', currentItem._id)} >Edit</a></button></td>
                      {btn}{localStorage.setItem('id', currentItem._id)}
                    </tr>
                  )
                }
                if(currentItem.__v == 2) {
                  return (
                    <tr>
                      <td>{currentItem._id}</td>
                      <td>{currentItem.username}</td>
                      <td>User</td>
                      <td>{localStorage.setItem('id', currentItem._id)}<button class="btn btn-link"><a href={"/edit-user"} onClick={localStorage.setItem('id', currentItem._id)}>Edit</a></button></td>
                      {btn}{localStorage.setItem('id', currentItem._id)}
                    </tr>
                  )
                }
                })
              }
            </tbody>
            </table>

            <br/>
            <br/>

            <div class="mb-3">
              <input class="form-control " id="validationTextarea" placeholder="Enter the ID of the User you wish to delete" value={this.state.curId} onChange={this.onChangeCurrentID} required></input>
              <div class="invalid-feedback">Enter the ID of the User you wish to delete</div>
              <td><button class="btn btn-link" onClick={this.deleteUser}>Click to Delete User</button></td>
            </div>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}
