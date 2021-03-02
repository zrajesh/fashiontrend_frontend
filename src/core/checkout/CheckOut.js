import React from 'react';
import {connect} from 'react-redux';
// Import Components
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
// Import SCSS
import "./CheckOut.scss";

const CheckOut = ({cartItems}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem
                     key={cartItem._id} 
                     cartItem={cartItem} 
                     />
                    )
            }
            <div className="stripe">
                <StripeButton price={399} />
            </div>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CheckOut);
