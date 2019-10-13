
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/styles.css";
import axios from 'axios';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []
      // name: String,
      // price: String,
      // description: String,
      // brand: String,
      // model: String,
      // inStock: Boolean,
      // image: String
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

  render() {
    return (
      <div class="content rounded">
        <head><link href="https://fonts.googleapis.com/css?family=Asap&display=swap" rel="stylesheet"/></head>
        <div className="App">
          <div class="jumbotron1 rounded">
          <Menu/>

            <div class="row">
              <div class="col thumb-padding item">
            <a href="./popShop">
              <img width="500px" height="312px" class="rounded wrappera" src="https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa" alt="My image"/>
              <button type="button" class="btn btn-default2 pizza btn-lg wrapperb"><b>Featured Laptops</b></button>
                         </a>
        </div>

              <div class="col thumb-padding item">
              <img width="500px" height="312px"class="rounded wrappera" src="https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg" alt="My image"/>
              <button type="button" class="btn btn-default2 btn-lg wrapperb "><b>Featured Desktops</b></button>
              </div>
            </div>
          </div>
          </div>

      </div>
    );
  }
}
