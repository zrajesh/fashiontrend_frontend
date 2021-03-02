import React from 'react';
import {Link} from "react-router-dom";
// Import Components
import {ReactComponent as Facebook} from "../../assets/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/instagram.svg";
// Import scss
import "./FooterComponent.scss";

const FooterComponent = () => {
    return (
        <div className="footer">
        <div className="wrapper">
            <div className="brand">
                <h3>FASHION HUB</h3>
            </div>
            <div className="footer-container">
                <div className="item">
                    <h4>CUSTOMER SERVICE</h4>
                    <Link className="list" to="/">
                    Track Order
                    </Link>
                    <Link className="list" to="/">
                    Return Order
                    </Link>
                    <Link className="list" to="/">
                    Cancel Order
                    </Link>
                </div>
                <div className="item">
                    <h4>COMPANY</h4>
                    <Link className="list" to="/">
                    Home
                    </Link>
                    <Link className="list" to="#">
                    About Us
                    </Link>
                    <Link className="list" to="#">
                    Privacy Policy
                    </Link>
                    <Link className="list" to="#">
                    Blog
                    </Link>
                </div>
                <div className="item">
                    <h4>CONNECT WITH US</h4>
                    <div className="icon">
                        <Facebook />
                    </div>
                    <div className="icon">
                        <Instagram />
                    </div>
                </div>
            </div>
            <hr className="horizontal" />
            <div>
                <p className="copyright">
                Copyright &copy; 2021
                <span className="copy-bold"> FASHION HUB</span> All rights reserved
                </p>
            </div>
            </div>
        </div>
    );
};

export default FooterComponent;
