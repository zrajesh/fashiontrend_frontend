import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// Import Components
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cartItem/CartItem';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
// Import scss
import "./CartDropdown.scss"

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem 
                    key={cartItem._id} 
                    item={cartItem}
                    />)
                : <span className="empty-message">
                Your Bag is empty
                </span>
            }
            </div>
            <CustomButton
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}
            >
            GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapstateToProps = ({cart: {cartItems}}) => ({
    cartItems: cartItems
})

export default withRouter(connect(mapstateToProps)(CartDropdown));
