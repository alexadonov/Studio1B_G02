
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./components/styles.css"


export default class Home extends Component {


  render() {
    return (
      <div class="content rounded">
        <div className="App">
          <Menu/>
          <div class="jumbotron1 rounded">
            <div class="shadow bg-white rounded-top">
            <div class="row px-5 mx-auto">
            <div class="col px-1">
            </div>
              <div class="col-6 px-1">
                <h1 class="display-4 p-3">Lorem Ipsum</h1>
              </div>
              <div class="col px-1">
                <a href="sign-in" role="button" class="btn btn-default btn-sm"><b>SignIn</b></a>
              </div>
            </div>
              <div class="container">
              <div class="row px-5 mx-auto">
                <div class="col-sm px-1">
                  <button type="button" class="btn btn-default btn-sm"><b>Desktops</b></button>
                </div>
                <div class="col-sm px-1">
                  <button type="button" class="btn btn-default btn-sm"><b>Accessories</b></button>
                </div>
                <div class="col-sm px-1">
                  <button type="button" class="btn btn-default btn-sm"><b>Featured Products</b></button>
                </div>
                <div class="col-sm px-1">
                  <button type="button" class="btn btn-default btn-sm"><b>Discounted</b></button>
                </div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col thumb-padding">
              <img width="500px" height="312px" class="rounded mx-auto thumb-shadow" src="https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa" alt="My image"/>
              <button type="button" class="btn btn-default2 btn-lg"><b>Featured Laptops</b></button>
              </div>
              <div class="col thumb-padding">
              <img width="500px" height="312px"class="rounded mx-auto thumb-shadow" src="https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg" alt="My image"/>
              <button type="button" class="btn btn-default2 btn-lg"><b>Featured Desktops</b></button>
              </div>
            </div>
          </div>
          </div>

      </div>
    );
  }
}
