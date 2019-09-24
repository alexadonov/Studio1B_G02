import React, { Component } from 'react';
import Arrow from './components/arrow';
import ImageSlide from './components/imageSlide';

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        const imgUrls = [
            {name: 'slide0', image: 'https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2Fa3672910-8104-11e9-a0f7-aeb448b3c7e2&client=a1acac3e1b3290917d92&signature=b7df459cfd4ed082bc6df7f56cc2daf839ba46fa'},
            {name: 'slide1', image: 'https://icdn6.digitaltrends.com/image/microsoft-surface-studio-2-6009-640x640.jpg'}
        ];

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return(
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide}
                    glyph="&#9664;" />

                <ImageSlide url={this.state.currentImageIndex} />

                <Arrow direction="right" clickFunction={this.nextSlide}
                    glyph="&#9654;" />
            </div>
        );
    }
}