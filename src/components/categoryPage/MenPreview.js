import React, {useState, useEffect} from "react";
// Import components
import Men from "./Men";
import {getProducts} from "../../core/helper/coreapicalls";
// Import scss
import "./CategoryDirectory.scss";

const MenPreview = () => {
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
        <h1>Men's Clothing</h1>
            <div className="contentPreview">
                {
                    products
                    .filter((product) =>  product.category === "603dd6ecb4cb521b102f2b33"
                    )
                    .map((item) => (
                        <Men
                         key={item._id}
                         item={item}
                         />
                    ))
                }
            </div>
        </div>
    );
};



export default MenPreview;
