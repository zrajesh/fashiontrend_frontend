import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// Import components
import {isAuthenticated} from '../auth/helper';
import CustomButton from '../components/custom-button/CustomButton';
import {deleteProduct, getProducts} from './helper/adminapicall';
// Import scss
import "./admin.scss";
import "./Manage.scss"

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const {user, token} = isAuthenticated();

    const preload = () => {
        getProducts()
        .then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        preload();
    }, []);

    const deleteUserProduct = productId => {
        deleteProduct(productId, user._id, token)
        .then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                preload();
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="globalAdmin">
            <h1 className="title">Manage all your products</h1>
            <div className="adminHome adminHomeupdate">
                <Link to="/admin/dashboard">
                    <CustomButton type="submit">
                    Admin Home
                    </CustomButton>
                </Link>
            </div>
            <div className="manage-container">
            {products.map((product, index) => (
                <div key={index} className="container-row">
                    <div className="item col1">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="item">
                        <Link to={`/admin/product/update/${product._id}`}>
                            <span className="btn">UPDATE</span>
                        </Link>
                    </div>
                    <div className="item">
                        <button
                        className="btn del" 
                        onClick={() => {
                            deleteUserProduct(product._id)
                        }}>
                        DELETE
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default ManageProducts;
