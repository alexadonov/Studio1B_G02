
import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import axios from 'axios';


export default class Shop extends Component {

  state = {
      data: [],
      id: 0,
      username: String,
      password: String,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null,
    };

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
      this.getDataFromDb();
      if (!this.state.intervalIsSet) {
        let interval = setInterval(this.getDataFromDb, 1000);
        this.setState({ intervalIsSet: interval });
      }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
      if (this.state.intervalIsSet) {
        clearInterval(this.state.intervalIsSet);
        this.setState({ intervalIsSet: null });
      }
    }

    // just a note, here, in the front end, we use the id key of our data object
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify
    // data base entries

    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => {
      fetch('http://localhost:3001/api/getData')
        .then((data) => data.json())
        .then((res) => this.setState({ data: res.data }));
    };

    // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div class="container" >
          <Router>
          <Menu/>
          <div className="App">
          <br/>
          <div class="jumbotron shadow">
            <div class="shadow p-1 mb-5 bg-white rounded-top">
            <h1>Sign In</h1>
            </div>
            <div class="vertical-center">
            <form onSubmit={this.handleSubmit}>
            <div>
            <div class="col" align="center" >
            <div class="col-lg-8 col-lg-offset-8" id="input-gap">
            <div width="200px" class="input-group">
              <div class="input-group-prepend border-right">
                <span class="input-group-text border-right" id="basic-addon1">
<svg width="12px" height="14px" viewBox="0 0 12 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <path d="M30,30.6666667 C30,31.0348565 29.7015232,31.3333333 29.3333333,31.3333333 C28.9651435,31.3333333 28.6666667,31.0348565 28.6666667,30.6666667 L28.6666667,29.3333333 C28.6666667,28.2287638 27.7712362,27.3333333 26.6666667,27.3333333 L21.3333333,27.3333333 C20.2287638,27.3333333 19.3333333,28.2287638 19.3333333,29.3333333 L19.3333333,30.6666667 C19.3333333,31.0348565 19.0348565,31.3333333 18.6666667,31.3333333 C18.2984768,31.3333333 18,31.0348565 18,30.6666667 L18,29.3333333 C18,27.4923842 19.4923842,26 21.3333333,26 L26.6666667,26 C28.5076158,26 30,27.4923842 30,29.3333333 L30,30.6666667 Z M24,24.6666667 C22.1590508,24.6666667 20.6666667,23.1742825 20.6666667,21.3333333 C20.6666667,19.4923842 22.1590508,18 24,18 C25.8409492,18 27.3333333,19.4923842 27.3333333,21.3333333 C27.3333333,23.1742825 25.8409492,24.6666667 24,24.6666667 Z M24,23.3333333 C25.1045695,23.3333333 26,22.4379028 26,21.3333333 C26,20.2287638 25.1045695,19.3333333 24,19.3333333 C22.8954305,19.3333333 22,20.2287638 22,21.3333333 C22,22.4379028 22.8954305,23.3333333 24,23.3333333 Z" id="path-2"></path>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-810.000000, -367.000000)">
            <g id="Group-2" transform="translate(792.000000, 349.000000)">
                <mask id="mask-2" fill="white">
                    <use href="#path-2"></use>
                </mask>
                <use id="Combined-Shape" fill="#000000" fill-rule="nonzero" href="#path-2"></use>
            </g>
        </g>
    </g>
</svg></span>
              </div>
              <input type="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            </div>
            <div class="col-lg-8 col-lg-offset-8" id="input-gap">
            <div class="input-group sm-3">
              <div class="input-group-prepend border-right">
                <span class="input-group-text padding-asterix border-right" id="basic-addon1"><b>

                <svg width="12px" height="14px" viewBox="0 0 12 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <path d="M19.4,21.4 L19.4,19.6 C19.4,17.6117749 21.0117749,16 23,16 C24.9882251,16 26.6,17.6117749 26.6,19.6 L26.6,21.4 L27.2,21.4 C28.1941125,21.4 29,22.2058875 29,23.2 L29,27.4 C29,28.3941125 28.1941125,29.2 27.2,29.2 L18.8,29.2 C17.8058875,29.2 17,28.3941125 17,27.4 L17,23.2 C17,22.2058875 17.8058875,21.4 18.8,21.4 L19.4,21.4 Z M20.6,21.4 L25.4,21.4 L25.4,19.6 C25.4,18.2745166 24.3254834,17.2 23,17.2 C21.6745166,17.2 20.6,18.2745166 20.6,19.6 L20.6,21.4 Z M18.8,22.6 C18.4686292,22.6 18.2,22.8686292 18.2,23.2 L18.2,27.4 C18.2,27.7313708 18.4686292,28 18.8,28 L27.2,28 C27.5313708,28 27.8,27.7313708 27.8,27.4 L27.8,23.2 C27.8,22.8686292 27.5313708,22.6 27.2,22.6 L18.8,22.6 Z" id="path-1"></path>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Artboard" transform="translate(-809.000000, -456.000000)">
                            <g id="Group" transform="translate(792.000000, 440.000000)">
                                <mask id="mask-2" fill="white">
                                    <use href="#path-1"></use>
                                </mask>
                                <use id="Combined-Shape" fill="#000000" href="#path-1"></use>
                            </g>
                        </g>
                    </g>
                </svg></b></span>
              </div>
              <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            </div>
            </div>
            </div>
          <input type="submit" class="btn black-background white b-s" value="Login"/>
          <a class="btn-txt1" href="/" role="button"><h6>Not a member? Register <u>here</u>.</h6></a>
          </form>
          </div>
        </div>
        </div>
        <ul>{this.state.pictures}</ul>
        </Router>
      </div>
    );
  }
}
