import React, {useState, useEffect} from "react";
// Import components
import Accessories from "./Accessories";
import {getProducts} from "../../core/helper/coreapicalls";
// Import scss
import "./CategoryDirectory.scss";

const AccessoriesPreview = () => {
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
        <div className="category-preview">
            <h1>Awesome Accessories</h1>
            <div className="contentPreview">
                {
                    products
                    .filter((product) =>  product.category === "603dd6f9b4cb521b102f2b35")
                    .map((item) => (
                        <Accessories
                         key={item._id} 
                         item={item}
                         />
                    ))
                }
            </div>
        </div>
    );
};

export default AccessoriesPreview;
