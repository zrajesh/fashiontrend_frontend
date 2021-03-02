import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// Import scss
import "./Heros.scss";

const Hero = () => {
    return (
        <div className="wrap">
        <Carousel className="carousel">
            <div className="parent">
                <img 
                src="https://images.unsplash.com/photo-1582399951045-15fa20030700?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
                className="image"
                alt="main-image" />
            </div>
            <div className="parent">
                <img 
                src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="image"
                alt="main-image" />
            </div>
            <div className="parent">
                <img 
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="image"
                alt="main-image" />
            </div>
        </Carousel>
        </div>
    );
};

export default Hero;
