import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
// Import API
import {API} from "../../backend";
// Import components
import CustomButton from "../custom-button/CustomButton";
import {addItem} from '../../redux/cart/cart.actions';
// Import scss
import "./CollectionItem.scss";

const CollectionItem = ({item, addItem}) => {

    const {_id, name, price} = item;

    const imageUrl = `${API}/product/photo/${_id}`;

    return (
        <div className="collection-item">
            <div
             className="image"
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton
             inverted
             onClick={() => addItem(item)}
             >Add To Cart
             </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
