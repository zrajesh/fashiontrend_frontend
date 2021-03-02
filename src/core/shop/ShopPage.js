import React, {useState, useEffect} from "react";
// Import Components
import Base from "../Base";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import {getCategories} from "../helper/coreapicalls";

const ShopPage = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    const loadAllCategory = () => {
        getCategories()
        .then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setCategories(data)
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadAllCategory();
    }, []);

    return (
        <div>
            <Base className="shop-page">
                {
                    categories.map(({_id, ...otherProps}) => (
                        <CollectionPreview key={_id} _id={_id} {...otherProps} />
                    ))
                }
            </Base>
        </div>
    );
}

export default ShopPage;
