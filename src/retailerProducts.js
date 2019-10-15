
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';
import "./static/shop.css";
import CurrencyFormat from 'react-currency-format';


export default class Shop extends Component {

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
             <h1>Retailer Products</h1>
             <div class="row">
             <div class="col-sm"></div>
             <div class="col-sm">
                <a href="/custProfile">Return to Profile</a>
             </div>
             <div class="col-sm"></div>
               <div class="col-sm">
                 <a class="btn btn-link" href="/admin-create-item">Add new item</a>
               </div>
               <div class="col-sm"></div><div class="col-sm"></div>
             </div>
 
             <table className="table table-striped" style={{ marginTop: 20 }} >
               <thead>
                 <tr>
                   <th>Item ID</th>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Brand</th>
                   <th>Edit</th>
                   <th>Delete</th>
                 </tr>
               </thead>
             <tbody>
             {this.state.items.map(function(currentItem, i) {
                 if(currentItem.retailerId == localStorage.getItem('currentUserId')){
                   return (
                     <tr>
                       <td>{currentItem._id}</td>
                         <td>{currentItem.name}</td>
                         <td>${currentItem.price}</td>
                         <td>{currentItem.brand}</td>
                         <td>{localStorage.setItem('editId', currentItem._id)}<button class="btn btn-link"><a href={"/"}>Edit</a></button></td>
                         <td><button class="btn btn-link" onClick={function() {
                           localStorage.setItem('deleteId', currentItem._id);
                           axios.delete('http://localhost:4000/items/' + localStorage.getItem('deleteId'))
                             .then(res => alert("Deleted"), window.location = '/');
                         }}>X</button></td>
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
