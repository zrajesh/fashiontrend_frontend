import React from 'react';
import {API} from "../backend";
// Import components
import Base from './Base';
import Hero from '../components/hero/Hero';
import Directory from "../components/Directory/Directory";
// Import scss
import "./Home.scss"

const Home = () => {
    return (
        <div>
        <Hero />
        <Base className="homepage">
            <Directory />
        </Base>
        </div>
    );
}

export default Home;
