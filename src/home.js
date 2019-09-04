
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./components/styles.css"


export default class Home extends Component {

  render() {
    return (
      <div class="content rounded">
        <div className="App">
          <div class="jumbotron1 rounded">
            <div class="shadow bg-white rounded-top">
            <div class="row px-5 mx-auto">
            <div class="col px-1">
            </div>
              <div class="col-6 px-1">
                <h1 class="display-4 p-1">Lorem Ipsum</h1>
              </div>
              <div class="col px-1">
                <a href="sign-in" role="button" class="btn btn-default btn-sm padding-signin">
                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path d="M4,4 L4,9 L9,9 L9,4 L4,4 Z M3,2 L10,2 C10.5522847,2 11,2.44771525 11,3 L11,10 C11,10.5522847 10.5522847,11 10,11 L3,11 C2.44771525,11 2,10.5522847 2,10 L2,3 C2,2.44771525 2.44771525,2 3,2 Z M14,2 L21,2 C21.5522847,2 22,2.44771525 22,3 L22,10 C22,10.5522847 21.5522847,11 21,11 L14,11 C13.4477153,11 13,10.5522847 13,10 L13,3 C13,2.44771525 13.4477153,2 14,2 Z M15,9 L20,9 L20,4 L15,4 L15,9 Z M14,13 L21,13 C21.5522847,13 22,13.4477153 22,14 L22,21 C22,21.5522847 21.5522847,22 21,22 L14,22 C13.4477153,22 13,21.5522847 13,21 L13,14 C13,13.4477153 13.4477153,13 14,13 Z M15,20 L20,20 L20,15 L15,15 L15,20 Z M3,13 L10,13 C10.5522847,13 11,13.4477153 11,14 L11,21 C11,21.5522847 10.5522847,22 10,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,14 C2,13.4477153 2.44771525,13 3,13 Z M4,20 L9,20 L9,15 L4,15 L4,20 Z" id="path-1"></path>
                    </defs>
                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="grid" transform="translate(-2.000000, -2.000000)">
                            <mask id="mask-2" fill="white">
                                <use href="#path-1"></use>
                            </mask>
                            <use id="Combined-Shape" fill="#000000" fill-rule="nonzero" href="#path-1"></use>
                        </g>
                    </g>
                </svg></a>
              </div>
            </div>
              <div class="container">
              <div class="row px-5 mx-auto">
                <div class="col-sm px-1">
                  <button type="button" class="btn btn-default btn-sm black"><b>Desktops</b></button>
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
              <div class="col thumb-padding item">
              <img width="500px" height="312px" class="rounded wrappera" src="https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa" alt="My image"/>
              <button type="button" class="btn btn-default2 btn-lg wrapperb"><b>Featured Laptops</b></button>
              </div>
              <div class="col thumb-padding item">
              <img width="500px" height="312px"class="rounded wrappera" src="https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg" alt="My image"/>
              <button type="button" class="btn btn-default2 btn-lg wrapperb"><b>Featured Desktops</b></button>
              </div>
            </div>
          </div>
          </div>

      </div>
    );
  }
}
