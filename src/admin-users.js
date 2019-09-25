
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import axios from 'axios';
import { Link, BrowserRouter as Router } from "react-router-dom";


export default class Admin extends Component {

  constructor(props) {
       super(props);
       this.state = {
         items: []
       }
    }

    componentDidMount() {
      axios.get('http://localhost:4000/users/')
          .then(res => {
            this.setState({
              items: res.data
            })
          })
          .catch(function (error) {
              console.log(error);
          });
          this.deleteUser = this.deleteUser.bind(this);

    }

    deleteUser() {
      axios.delete('http://localhost:4000/users/' + localStorage.getItem('id'))
        .then(res => alert("Deleted"));
    }

  render() {

    return (
      <div class="container" >
          <Router>
          <div className="App">
          <Menu/>
          <br/>
          <div class="shadow p-1 mb-5 bg-white rounded-top">
            <h1>Admin Center: Users</h1>

            <table className="table table-striped" style={{ marginTop: 20 }} >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>User Type</th>
                  <th>Add</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            <tbody>
            {this.state.items.map(function(currentItem, i) {
                if(currentItem.__v == 0) {
                  return (
                    <tr>
                      <td>{currentItem.username}</td>
                      <td>Admin</td>
                      <td><button><a href="/create-user">Add</a></button></td>
                      <td><button><a href={"/edit-user"}>Edit</a></button></td>
                      <td><button onClick={() => this.deleteUser()}>Delete</button></td>
                    </tr>
                  )
                }
                if(currentItem.__v == 1) {
                  return (
                    <tr>
                      <td>{currentItem.username }</td>
                      <td>Retailer</td>
                      <td><button><a href="/create-user">Add</a></button></td>
                      <td><button><a href={"/edit-user"}>Edit</a></button></td>
                      <td><button onClick={() => this.deleteUser()}>Delete</button></td>
                    </tr>
                  )
                }
                if(currentItem.__v == 2) {
                  return (
                    <tr>
                      <td>{currentItem.username}</td>
                      <td>User</td>
                      <td><button><a href="/create-user">Add</a></button></td>
                      <td><button><a href={"/edit-user"}>Edit</a></button></td>
                      <td><button onClick={() => this.deleteUser()}>Delete</button></td>
                    </tr>
                  )
                }
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
