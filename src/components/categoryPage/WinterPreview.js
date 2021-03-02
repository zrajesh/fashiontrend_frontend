import React, {useState, useEffect} from "react";
// Import components
import Winter from "./Winter";
import {getProducts} from "../../core/helper/coreapicalls";
// Import scss
import "./CategoryDirectory.scss";

const WinterPreview = () => {
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
            <h1>Clothing for Winter</h1>
            <div className="contentPreview">
                {
                    products
                    .filter((product) =>  product.category === "603dd700b4cb521b102f2b36")
                    .map((item) => (
                        <Winter
                         key={item._id} 
                         item={item}
                         />
                    ))
                }
            </div>
        </div>
    );
};

export default WinterPreview;
