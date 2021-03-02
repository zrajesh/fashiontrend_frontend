import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
// Import Components
import {signout, isAuthenticated} from '../../auth/helper';
import CartIcon from '../cartIcon/CartIcon';
// Import scss
import "./SideHeader.scss";

const SideHeader = ({history}) => {
    return (
        <div className="side-header backdrop">
            <div className="side-options">
                <Link
                 className="side-option" to="/shop">
                SHOP
                </Link>
                <Link
                 className="side-option" to="/shop/men">
                MEN
                </Link>
                <Link
                 className="side-option" to="/shop/women">
                WOMEN
                </Link>
                <Link 
                 className="side-option" to="/shop/accessories">
                ACCESSORIES
                </Link>
                <Link
                 className="side-option"
                 onClick={() => {
                    history.push("/checkout")
                 }}
                 >
                Cart
                </Link>
                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <Fragment>
                    <Link 
                     className="side-option" to="/admin/dashboard">
                    Admin Dashboard
                    </Link>
                    </Fragment>
                )}
                <Link 
                 className="side-option">
                 <CartIcon />
                </Link>
                {!isAuthenticated() && (
                <Fragment>
                <Link
                 className="side-option" to="/signin">
                SIGN IN
                </Link>
                <Link
                 className="side-option" to="/signup">
                SIGN UP
                </Link>
                </Fragment>
                )}
                {isAuthenticated() && (
                    <Link
                     className="side-option"
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
            
        </div>
    );
};

export default withRouter(SideHeader);
