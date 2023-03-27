import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import BAN1 from '../images/banner/BAN1.jpg';
import BAN2 from '../images/banner/BAN2.jpg';
import BAN3 from '../images/banner/BAN3.jpg';

const banner = () => {
    return (
        <div>
           <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BAN1}
          alt="First slide"
        />
        <Carousel.Caption>
                       <h3 className='slide-heading'>24 Hours Doctors Available</h3>
          <p className='slide-para'>Call- 16602</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BAN2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3  className='slide-heading'>24 Hours Doctors Available</h3>
          <p  className='slide-para'>Call- 16602</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BAN3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='slide-heading'>24 Hours Doctors Available</h3>
          <p  className='slide-para'>
           Call- 16602
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default banner;