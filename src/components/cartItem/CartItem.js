import React from 'react';
// Import Components
import {API} from "../../backend";
// Import SCSS
import "./CartItem.scss"

const CartItem = ({item: {_id, price, name, quantity}}) => {
    const imageUrl = `${API}/product/photo/${_id}`;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="cart item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    );
};

export default CartItem;
