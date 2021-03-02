import React from 'react';
import {connect} from 'react-redux';
// Import API
import {API} from "../../backend";
// Import Components
import CustomButton from "../custom-button/CustomButton";
import {addItem} from '../../redux/cart/cart.actions';
// Import SCSS
import "./categoryComponent.scss";

const Accessories = ({item, addItem}) => {
    const {_id, name, price} = item;
    
    const imageUrl = `${API}/product/photo/${_id}`
    return (
            <div className="categoryCollection">
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
            onClick={() => addItem(item)}
            inverted>
            Add To Cart
            </CustomButton>
            </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Accessories);
