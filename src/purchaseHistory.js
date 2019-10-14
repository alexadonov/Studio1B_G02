import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/styles.css"
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';


export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {mode:'customer', items: [], items5:[]};
    }

    componentDidMount() {
        var m = 0
        var items2 = [];

        axios.get('http://localhost:4000/users/' + localStorage.getItem('currentUserId'))
            .then(res => {
                this.setState({
                    userType: res.data.userType
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost:4000/history')
            .then((res) => {
                for (var p = 0; p <= res.data.length; p++) {
                    if (this.state.userType == 'Customer') {
                        if (res.data[p].customerId == localStorage.getItem('currentUserId')) {
                            items2[m] = res.data[p];
                            this.setState({items: items2})
                            this.state.total += parseInt(res.data[p].price, 10);
                            m++;
                        }
                    }
                else{
                        if (res.data[p].customerId == localStorage.getItem('currentUserId')) {
                            items2[m] = res.data[p];
                            this.setState({items: items2})
                            this.state.total += parseInt(res.data[p].price, 10);
                            m++;
                        }
                    }
                }
            })
            .catch(function (error) {
                console.log('What happened? ' + error);
            })

    }

        /*axios.get('http://localhost:4000/users/' + localStorage.getItem('currentUserId'))
            .then(res => {
                this.setState({
                    userType: res.data.userType
                })
            })
      }*/

    /*componentDidMount() {
        axios.get('http://localhost:4000/items/')
            .then(res => {
                this.setState({
                    items: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/




    render() {
        if (this.state.userType == 'Customer') {
            return (
                <div class="container">
                    <Router>
                        <div className="App">
                            <div class="jumbotron">
                                <h1 class="headingTop">Purchase History</h1>
                                <a href="/custProfile">Return to Profile</a>
                                <table className="table table-striped" style={{ marginTop: 20 }} >
                                  <thead>
                                    <tr>
                                        <th>Retailer ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                  </thead>
                                <tbody>
                                {this.state.items.map(function(currentItem, i) {
                                    return(
                                        <tr>
                                            <td>{currentItem.retailerId}</td>
                                            <td>{currentItem.name}</td>
                                            <td>{currentItem.price}</td>
                                            <td><button class="btn btn-link" onClick={function() {
                                              localStorage.setItem('id', currentItem._id)
                                              axios.delete('http://localhost:4000/history/' + localStorage.getItem('id'))
                                                .then(res => {window.location.reload(); alert("Deleted")});
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
        else{
            return (
                <div class="container">
                    <Router>
                        <div className="App">
                            <div class="jumbotron">
                                <h1 class="headingTop">Purchase History</h1>
                                <a href="/custProfile">Return to Profile</a>
                                <table className="table table-striped" style={{ marginTop: 20 }} >
                                    <thead>
                                    <tr>
                                        <th>Buyer ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.items.map(function(currentItem, i) {
                                        return(
                                            <tr>
                                                <td>{currentItem.customerId}</td>
                                                <td>{currentItem.name}</td>
                                                <td>{currentItem.price}</td>
                                                <td><button class="btn btn-link" onClick={function() {
                                                    localStorage.setItem('id', currentItem._id)
                                                    axios.delete('http://localhost:4000/history/' + localStorage.getItem('id'))
                                                        .then(res => {window.location.reload(); alert("Deleted")});
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
}
