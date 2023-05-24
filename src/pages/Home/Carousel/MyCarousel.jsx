import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import c1 from '../../../assets/home/01.jpg'
import c2 from '../../../assets/home/02.jpg'
import c3 from '../../../assets/home/03.png'
const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={c1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={c2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={c3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;