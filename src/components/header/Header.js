import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from "react-router-dom";
// Import Components
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {ReactComponent as Menu} from "../../assets/menu.svg";
import {signout, isAuthenticated} from '../../auth/helper';
import CartDropdown from '../cartDropdown/CartDropdown';
import CartIcon from '../cartIcon/CartIcon';
// Import scss
import "./header.scss";

//Updating color on tab 
const CurrentTab = (history, path) => {
    if(history.location.pathname === path) {
        return {color: "#1a2228"}
    }
}

const Header = ({drawerClickHandler, history, hidden}) => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 5) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`header ${show && "header_black"}`}>
            <Link
             className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
            <Menu onClick={drawerClickHandler} className="menu" />
                <Link
                 style={CurrentTab(history, "/shop")} 
                 className="option" to="/shop">
                SHOP
                </Link>
                <Link
                 style={CurrentTab(history, "/shop/men")} 
                 className="option" to="/shop/men">
                MEN
                </Link>
                <Link
                 style={CurrentTab(history, "/shop/women")} 
                 className="option" to="/shop/women">
                WOMEN
                </Link>
                <Link
                 style={CurrentTab(history, "/shop/accessories")} 
                 className="option" to="/shop/accessories">
                ACCESSORIES
                </Link>
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <Fragment>
                    <Link
                     style={CurrentTab(history, "/admin/dashboard")} 
                     className="option" to="/admin/dashboard">
                    Admin Dashboard
                    </Link>
                    </Fragment>
                )}
                <Link
                 style={CurrentTab(history, "/shop/cart")} 
                 className="option">
                 <CartIcon />
                </Link>
                {!isAuthenticated() && (
                <Fragment>
                <Link
                 style={CurrentTab(history, "/signin")} 
                 className="option" to="/signin">
                SIGN IN
                </Link>
                <Link
                 style={CurrentTab(history, "/signup")} 
                 className="option" to="/signup">
                SIGN UP
                </Link>
                </Fragment>
                )}
                {isAuthenticated() && (
                    <Link
                     style={CurrentTab(history, "/signout")} 
                     className="option"
                     onClick={() => {
                        signout(() => {
                            history.push("/")
                        })
                     }}
                     >
                    SIGN OUT
                    </Link>
                )}
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    );
};

const mapStateToProps = ({cart: {hidden}}) => ({
    hidden: hidden
})

export default connect(mapStateToProps)(withRouter(Header));
