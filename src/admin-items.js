
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import axios from 'axios';
import { Link, BrowserRouter as Router } from "react-router-dom";


export default class Admin extends Component {

  constructor(props) {
       super(props);
       this.onChangeCurrentID = this.onChangeCurrentID.bind(this);
       this.deleteItem = this.deleteItem.bind(this);

       this.state = {
         items: [],
         users: [],
         curId: String
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

    deleteItem(e) {
      e.preventDefault();
      const itemId = {
        curId: this.state.curId
      }

      axios.delete('http://localhost:4000/items/' + itemId.curId)
        .then(res => alert("Deleted - Please refresh page"))
        .catch(error => alert('Please make sure to enter a valid ITEM id'));
    }

    onChangeCurrentID(e) {
      this.setState({
          curId: e.target.value
      });
     }

  render() {
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
                  <th>Retailer ID</th>
                  <th>Item ID</th>
                  <th>Name</th>
                  <th>Edit</th>
                </tr>
              </thead>
            <tbody>
            {this.state.items.map(function(currentItem, i) {

                  return (
                    <tr>
                      <td>{currentItem.retailerId}</td>
                      <td>{currentItem._id}</td>
                        <td>{currentItem.name}</td>
                        <td>{localStorage.setItem('id', currentItem._id)}<button class="btn btn-link"><a href={"/edit-user"}>Edit</a></button></td>
                    </tr>
                  )
                })
              }
            </tbody>
            </table>

            {/* <br/>
            <br/> */}

            <div class="mb-3">
              <input class="form-control " id="validationTextarea" placeholder="Enter the ID of the Item you wish to delete" value={this.state.curId} onChange={this.onChangeCurrentID} required></input>
              <div class="invalid-feedback">Enter the ID of the User you wish to delete</div>
              <td><button class="btn btn-link" onClick={this.deleteItem}>Click to Delete Item</button></td>
            </div>

          </div>
          </div>
        </Router>
      </div>
    );
  }
}
