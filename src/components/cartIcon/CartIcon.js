import React from 'react';
import {connect} from 'react-redux';
// Import Components
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
// Import scss
import "./cartIcon.scss";

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div
         className="cart-icon"
         onClick={toggleCartHidden}
         >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
