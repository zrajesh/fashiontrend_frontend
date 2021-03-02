import React from 'react';
import {connect} from 'react-redux';
import {API} from "../../backend";
// Import Components
import {clearItemFromCart} from '../../redux/cart/cart.actions';
// Import SCSS
import "./CheckoutItem.scss";

const CheckoutItem = ({cartItem, clearItem}) => {
    const {_id, name, price, quantity} = cartItem;

    const imageUrl = `${API}/product/photo/${_id}`;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div
             className="remove-button"
             onClick={() => clearItem(cartItem)}
             >
            &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
