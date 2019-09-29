
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
         users: []
       }

    }

    componentDidMount() {
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

    deleteItem(e) {
      e.preventDefault();

      axios.delete('http://localhost:4000/items/' + localStorage.getItem('id'))
        .then(res => alert("Deleted"));
    }

  render() {
    var btn = <td><button class="btn btn-link" onClick={this.deleteItem}>X</button></td>
    return (
      <div class="container" >
          <Router>
          <div className="App">
          <Menu/>
          <br/>
          <div class="shadow p-1 mb-5 bg-white rounded-top">
            <h1>Admin Center: Items</h1>
            <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm"></div>
              <div class="col-sm">
                <h5><a href="/admin-user">View users</a></h5>
              </div>
              <div class="col-sm">
                <h5><a href="/create-item">Add new item</a></h5>
              </div>
              <div class="col-sm"></div><div class="col-sm"></div>
            </div>

            <table className="table table-striped" style={{ marginTop: 20 }} >
              <thead>
                <tr>
                  <th>Owner</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
            <tbody>
            {this.state.items.map(function(currentItem, i) {

                  return (
                    <tr>
                      <td>{currentItem.ownerId}</td>
                        <td>{currentItem.name}</td>
                        <td>{localStorage.setItem('id', currentItem._id)}<button class="btn btn-link"><a href={"/edit-user"}>Edit</a></button></td>
                        {localStorage.setItem('id', currentItem._id)}{btn}
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
