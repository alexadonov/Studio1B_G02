
import React, { Component } from 'react';
import Carousel from "./components/carouselPopProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import "./static/styles.css"


export default class Home extends Component {
  render() {
    return (
      <div class="content rounded">
        <div className="App">
          <div class="jumbotron1 rounded">
          <Menu/>
            <div class="row">
              <div class="col thumb-padding item">
              <img width="500px" height="312px" class="rounded wrappera" src="https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa" alt="My image"/>
              <button type="button" class="btn btn-default2 pizza btn-lg wrapperb"><b>Featured Laptops</b></button>
              </div>
              <div class="col thumb-padding item">
              <img width="500px" height="312px"class="rounded wrappera" src="https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg" alt="My image"/>
              <button type="button" class="btn btn-default2 btn-lg wrapperb"><b>Featured Desktops</b></button>
              </div>
            </div>

            {/* Getting carousel going */}
            <Carousel />

            {/* <div id="carouselPopProduct" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselPopProduct" data-slide-to="0" class="active"></li>
                <li data-target="#carouselPopProduct" data-slide-to="1"></li>
              </ol>


              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa" 
                    class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src="https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg" 
                    class="d-block w-100" alt="..."></img>
                </div>
              </div>


              <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div> */}

        
          </div>
        </div>

      </div>
    );
  }
}
