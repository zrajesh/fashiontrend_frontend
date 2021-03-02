import React, {useState, useEffect} from "react";
// Import components
import CollectionItem from "../collection-item/CollectionItem";
import {getProducts} from "../../core/helper/coreapicalls";
// Import scss
import "./CollectionPreview.scss";

const CollectionPreview = ({_id, name}) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProduct = () => {
        getProducts()
        .then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProducts(data)
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadAllProduct();
    }, []);
    return (
        <div className="collection-preview">
            <h1 className="title">
           {name}
            </h1>
            <div className="preview">
                {
                    products
                    .filter((product) =>  product.category === _id)
                    .filter((product, index) =>  index < 4)
                    .map((item) => {
                        return <CollectionItem key={item._id} item={item} />
                    })
                }
            </div>
        </div>
    );
};

export default CollectionPreview;
