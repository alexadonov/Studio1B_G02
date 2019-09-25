
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
      axios.get('http://localhost:4000/items/')
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
      axios.delete('http://localhost:4000/items/' + localStorage.getItem('id'))
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
            <h1>Welcome to the Admin Center</h1>
            <h3>What would you like to do?</h3>

            <div class="row">
              <div class="col thumb-padding item">
                <a href="admin-user"><img width="500px" height="312px" class="rounded wrappera" src="https://cdn.pixabay.com/photo/2018/05/01/15/06/user-3365840_960_720.png" alt="My image"/></a>
                <button type="button" class="btn btn-outline-primary btn-lg"><a href="admin-user">User</a></button>
              </div>
              <div class="col thumb-padding item">
                <a href="admin-user"><img width="500px" height="312px"class="rounded wrappera" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9cborZzVItjbFy9W-P9FinwQWknN9Bhh5NGe5iOYdb-DyQYGXw" alt="My image"/></a>
                <button type="button" class="btn btn-outline-primary btn-lg"><a href="admin-item">Items</a></button>
              </div>
          </div>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}
