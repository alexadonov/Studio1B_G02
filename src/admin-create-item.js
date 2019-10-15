
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';



export default class CreateItem extends Component {


  constructor(props) {
     super(props);

     this.onChangeName = this.onChangeName.bind(this);
     this.onChangePrice = this.onChangePrice.bind(this);
     this.onChangeDescription = this.onChangeDescription.bind(this);
     this.onChangeBrand = this.onChangeBrand.bind(this);
     this.onChangeModel = this.onChangeModel.bind(this);
     this.onChangeStock = this.onChangeStock.bind(this);
     this.onChangeImage = this.onChangeImage.bind(this);
     this.onSubmit = this.onSubmit.bind(this);

     this.state = {
         name: String,
         price: String,
         description: String,
         brand: String,
         model: String,
         stock: String,
         image: String
      }
  }

  componentDidMount() {
    if(localStorage.getItem('userType') === "user") {
      alert('You do not have access to this page');
      window.location = "/";
    }
  }

  onChangeName(e) {
    this.setState({
        name: e.target.value
    });
  }
  onChangePrice(e) {
    this.setState({
        price: e.target.value
    });
  }
  onChangeDescription(e) {
   this.setState({
       description: e.target.value
   });
  }

  onChangeBrand(e) {
    this.setState({
        brand: e.target.value
    });
  }
  onChangeModel(e) {
    this.setState({
        model: e.target.value
    });
  }
  onChangeStock(e) {
   this.setState({
       stock: e.target.value
   });
  }

  onChangeImage(e) {
   this.setState({
       image: e.target.value
   });
  }


  onSubmit(e) {
    e.preventDefault();

    const newItem = {
      retailerId: localStorage.getItem('currentUserId'),
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      brand: this.state.brand,
      model: this.state.model,
      stock: this.state.stock,
      image: this.state.stock
  };

  //Checks the name is unique and will not conflict with other items
  // axios.get('http://localhost:4000/items/')
  //     .then(response => {
  //       for(var i = 0; i < response.data.length; i++) {
  //         if(response.data[i].name === newItem.name  ) {
  //             alert("Name taken");
  //             return 0;
  //           }
  //         }
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });

  //Adds the item - if it fails will alert the customer
  axios.post('http://localhost:4000/items/add', newItem)
    .then(response => {
        alert("Welcome to the club!");
        return;
    })
    .catch(function (error){
      console.log('What happened? ' + error);
    })

    this.setState({
      name: '',
      price : '',
      description: '',
      brand: '',
      model: '',
      stock: '',
      image: ''
    });

  }



  render() {
    return (
      <div class="container">
        <Router>
          <div className="App" >
          <br/>
          <div class="jumbotron">
            <h1>Create Item</h1>
            <a href="/admin-item">Return to Items</a>
            <form onSubmit={this.onSubmit}>
            <br/>
            <div class="container">
              <div class="row">
            <div class="col">
              <input type="text" class="form-control" id="validationTooltip01" placeholder="Name" value="" value={this.state.name} onChange={this.onChangeName} required/>
              <div class="valid-tooltip">
                Looks good!
              </div>
            </div>
            <div class="col">
            <input type="text" class="form-control" id="validationTooltip02" placeholder="Price" value="" value={this.state.price} onChange={this.onChangePrice} required/>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>

          </div>
          </div>
          <br/>
          <div class="container">
            <div class="row">

          <div class="col">
            <select id="inputState" class="form-control" value={this.state.brand} onChange={this.onChangeBrand} >
              <option selected>Brand</option>
              <option>Dell</option>
              <option>HP</option>
              <option>Lenovo</option>
            </select>
          </div>

            <div class="col">
          <input type="text" class="form-control" id="validationTooltip02" placeholder="Model" value="" value={this.state.model} onChange={this.onChangeModel} required/>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>

        </div>
        </div>

        <br/>

        <div class="container">
          <div class="row">
            <div class="col">
              <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" value={this.state.stock} onChange={this.onChangeStock} required/>
                <label class="custom-control-label" for="customControlValidation2">In Stock</label>
              </div>
            </div>
          <div class="col">
            <div class="custom-control custom-radio mb-3">
              <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" value={this.state.stock} onChange={this.onChangeStock} required/>
              <label class="custom-control-label" for="customControlValidation3">Not in Stock</label>
              <div class="invalid-feedback">Please check a box</div>
            </div>
          </div>

      </div>
      </div>

      <div class="custom-file">
        <input type="file" class="custom-file-input" id="validatedCustomFile" value={this.state.image} onChange={this.onChangeImage} required/>
        <label class="custom-file-label" for="validatedCustomFile">Upload an Image</label>
        <div class="invalid-feedback">Example invalid custom file feedback</div>
      </div>

      <br/><br/>

          <div class="mb-3">
            <textarea class="form-control " id="validationTextarea" placeholder="Item's Description" value={this.state.description} onChange={this.onChangeDescription} required></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>

            <br/>
          <input type="submit" class="btn btn-outline-primary" value="Submit"/>
          </form>
        </div>
        </div>


        </Router>
      </div>
    );
  }


}
