
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./components/styles.css"


export default class Shop extends Component {


  render() {
    return (
      <div class="content">
        <div className="App">
          <Menu/>
          <div class="jumbotron">
            <div class="shadow p-3 mb-5 bg-white rounded">
              <h1 class="display-4">kldmwmw;lfes</h1>
            </div>
            <p>Shop now to secure our opening deals</p>
            <a class="btn btn-primary btn-lg" href="sign-in" role="button">Shop now!</a>
            <a class="btn btn-primary btn-ph" href="purchaseHistory" role="button">Purchase History!</a>
            <div class="row">
              <div class="col">
              <img width="500px" height="312px"class="rounded mx-auto d-block" src="https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa" alt="My image"/>
              </div>
              <div class="col">
              <img width="500px" height="312px"class="rounded mx-auto d-block" src="https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg" alt="My image"/>
              </div>
            </div>
          </div>
          </div>

      </div>
    );
  }
}
