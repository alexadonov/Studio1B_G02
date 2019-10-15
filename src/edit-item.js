
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
         stock: Boolean,
         image: String
      }
  }

  componentDidMount() {
    if(localStorage.getItem('userType') === "Customer") {
      alert('You do not have access to this page');
      window.location = "/";
    }

    axios.get('http://localhost:4000/items/' + localStorage.getItem('editId'))
          .then(res => {
            this.setState({
              name: res.data.name,
              price: res.data.price,
              description: res.data.description,
              brand: res.data.brand,
              model: res.data.model,
              stock: res.data.stock,
              image: res.data.image
            })
          })
          .catch(function (error) {
              console.log(error);
          });
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

    const editItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      brand: this.state.brand,
      model: this.state.model,
      stock: this.state.stock,
      image: this.state.stock
    };
  console.log(editItem);

  axios.post('http://localhost:4000/items/update/', editItem)
    .then(res => console.log(res.data), window.location.href = '/retailerProducts')
    .catch(function (error){
      console.log('What happened? ' + error);
    })
  }



  render() {
    return (
      <div class="container">
        <Router>
          <div className="App" >
          <br/>
          <div class="jumbotron">
            <h1>Edit Item</h1>
            <a href="/retailerProducts">Return to Products</a>
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
      <input type="text" class="form-control" id="validationTooltip01" placeholder="Enter a .jpg link" value="" value={this.state.image} onChange={this.onChangeImage} required/>
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
